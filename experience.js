function buildOrderMessage(product, customer, delivery) {
  return ["Hello Monster Music BD! I would like to order:", "", "Product: " + product.name,
    "Product ID: " + product.id, "Model: " + product.model,
    "Product price: " + formatPrice(product.discountPrice), "Delivery charge: " + formatPrice(delivery),
    "Total: " + formatPrice(product.discountPrice + delivery), "", "Customer: " + customer.name,
    "Phone: " + customer.phone, "House / building: " + customer.house, "Road / village: " + customer.road,
    "Area: " + customer.area, "District: " + customer.district, "Division: " + customer.division,
    "Police station / Thana: " + customer.thana, "Post code: " + customer.postcode, "",
    "Please confirm availability and my order."].join("\n");
}
function openOrder(product) {
  var previous = document.getElementById("orderDialog");
  if (previous) previous.remove();
  var dialog = document.createElement("dialog");
  dialog.id = "orderDialog";
  dialog.className = "order-dialog";
  dialog.setAttribute("aria-labelledby", "orderTitle");
  dialog.innerHTML = `<button class="order-close" type="button" aria-label="Close order form">×</button>
    <div class="order-heading"><span class="eyebrow">ONE STEP CLOSER TO GREAT SOUND</span><h2 id="orderTitle">Make it yours.</h2><p>Tell us where to deliver your sound.</p></div>
    <form id="orderForm"><div class="checkout-layout"><div class="address-fields">
    <label>Full name<input name="name" autocomplete="name" required maxlength="100" placeholder="Your full name"></label>
    <label>Mobile number<input name="phone" autocomplete="tel" type="tel" required placeholder="01XXXXXXXXX" maxlength="20"></label>
    <label>House / building<input name="house" autocomplete="address-line1" required maxlength="120" placeholder="House or building name / number"></label>
    <label>Road / village<input name="road" required maxlength="120" placeholder="Road number or village"></label>
    <label>Area<input name="area" required maxlength="120" placeholder="Your area"></label>
    <label>Division<select name="division" required><option value="">Select your division</option>${BD_DIVISIONS.map(d=>`<option value="${d}">${d === 'Chattogram' ? 'Chattogram (Chittagong)' : d}</option>`).join('')}</select></label>
    <label>District<input name="district" autocomplete="address-level2" required maxlength="80" placeholder="Your district"></label>
    <label>Police station / Thana<input name="thana" required maxlength="80" placeholder="Your police station"></label>
    <label>Post code<input name="postcode" autocomplete="postal-code" inputmode="numeric" required pattern="[0-9০-৯]{4}" maxlength="4" placeholder="4-digit post code"></label>
    </div><aside class="order-summary"><span class="eyebrow">YOUR ORDER</span><img id="orderImage" alt=""><h3 id="orderProduct"></h3><p id="orderModel"></p><div class="summary-row"><span>Product price</span><strong id="orderPrice"></strong></div><div class="summary-row"><span>Delivery</span><strong id="orderDelivery">Select division</strong></div><div class="summary-row total"><span>Total</span><strong id="orderTotal">—</strong></div><p class="order-help">Delivery is calculated for your selected division.</p></aside></div>
    <p id="orderError" class="order-error" role="alert"></p><button class="confirm-order" type="submit">Confirm order · Open WhatsApp ↗</button><p class="order-help">WhatsApp opens with your order filled in. Tap Send there to submit it. Your details are not saved in this browser.</p></form>`;
  document.body.appendChild(dialog);
  dialog.querySelector('#orderImage').src = product.media.find(m=>m.type==='image').url;
  dialog.querySelector('#orderImage').alt = product.name;
  dialog.querySelector('#orderProduct').textContent = product.name;
  dialog.querySelector('#orderModel').textContent = product.model;
  dialog.querySelector('#orderPrice').textContent = formatPrice(product.discountPrice);
  var form = dialog.querySelector('form');
  function updateTotal() {
    var division = form.elements.division.value;
    dialog.querySelector('#orderError').textContent = '';
    try {
      var charge = division ? getDeliveryCharge(division) : null;
      dialog.querySelector('#orderDelivery').textContent = charge === null ? 'Select division' : charge === 0 ? 'Free' : formatPrice(charge);
      dialog.querySelector('#orderTotal').textContent = charge === null ? '—' : formatPrice(product.discountPrice + charge);
    } catch(e) { dialog.querySelector('#orderError').textContent = e.message; dialog.querySelector('#orderTotal').textContent = 'Unavailable'; }
  }
  form.elements.division.addEventListener('change', updateTotal);
  function digits(value) { return value.replace(/[০-৯]/g, d=>'০১২৩৪৫৬৭৮৯'.indexOf(d)); }
  form.addEventListener('input', function(e) { e.target.setCustomValidity(''); });
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var customer = Object.fromEntries(new FormData(form));
    for (var key in customer) {
      customer[key] = customer[key].trim();
      if (!customer[key]) { form.elements[key].setCustomValidity('Please fill in this field.'); form.elements[key].reportValidity(); return; }
    }
    customer.phone = digits(customer.phone).replace(/[\s()-]/g, '');
    customer.postcode = digits(customer.postcode);
    if (!/^(?:\+?88)?01[3-9]\d{8}$/.test(customer.phone)) { form.elements.phone.setCustomValidity('Enter a valid Bangladesh mobile number, e.g. 01601233212.'); form.elements.phone.reportValidity(); return; }
    try {
      var charge = getDeliveryCharge(customer.division);
      var url = 'https://wa.me/' + DELIVERY_CONFIG.whatsappNumber + '?text=' + encodeURIComponent(buildOrderMessage(product, customer, charge));
      window.location.assign(url);
    } catch(error) { dialog.querySelector('#orderError').textContent = error.message; }
  });
  dialog.querySelector('.order-close').addEventListener('click', ()=>dialog.close());
  dialog.addEventListener('click', e=>{ if(e.target===dialog) { var r=dialog.getBoundingClientRect(); if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom) dialog.close(); } });
  var oldOverflow = document.body.style.overflow;
  dialog.addEventListener('close', ()=>{ document.body.style.overflow = oldOverflow; });
  document.body.style.overflow = 'hidden';
  dialog.showModal();
}
document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.getElementById('themeToggle');
  function syncTheme() { var dark = document.documentElement.dataset.theme === 'dark'; toggle.innerHTML = (dark ? '☀' : '◐') + '<span>'+(dark ? 'Light mode' : 'Dark mode')+'</span>'; toggle.setAttribute('aria-label', 'Switch to ' + (dark ? 'light' : 'dark') + ' mode'); toggle.setAttribute('aria-pressed', String(dark)); }
  toggle.addEventListener('click', function() { var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = next; try { localStorage.setItem('monster-theme',next); } catch(e) {} syncTheme(); });
  syncTheme();
  var count = document.querySelector('.hero-stat .num'); if(count) count.textContent = PRODUCTS.length;
  var hero = document.getElementById('heroCard');
  if(hero) { hero.tabIndex = 0; hero.setAttribute('role','link'); hero.setAttribute('aria-label','View featured product'); hero.addEventListener('keydown', e=>{ if(e.key==='Enter') hero.click(); }); }
  var menu = document.getElementById('navToggle'); menu.setAttribute('aria-controls','navLinks'); menu.setAttribute('aria-expanded','false'); menu.addEventListener('click', ()=>menu.setAttribute('aria-expanded', String(document.getElementById('navLinks').classList.contains('open'))));
  if(window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches) {
    document.addEventListener('pointermove', function(e) { var card = e.target.closest('.product-card, .hero-product-card'); if(!card) return; var r=card.getBoundingClientRect(); card.style.setProperty('--tilt-x', ((e.clientY-r.top)/r.height-.5)*-7+'deg'); card.style.setProperty('--tilt-y', ((e.clientX-r.left)/r.width-.5)*7+'deg'); });
    document.addEventListener('pointerout', function(e) { var card=e.target.closest('.product-card, .hero-product-card'); if(card && !card.contains(e.relatedTarget)) { card.style.setProperty('--tilt-x','0deg'); card.style.setProperty('--tilt-y','0deg'); } });
  }
});

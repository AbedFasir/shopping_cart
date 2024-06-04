function input(id, sign, id2, price) {
   const get_input = document.getElementById(id);
   const input_str = get_input.value;
   const input = parseInt(input_str);

   let total_input;
   if(sign == 'plus') {
      total_input = input + 1;
   }
   else if(sign == 'minus') {
      total_input = input - 1;
   }
   get_input.value = total_input;

   const get_phn_price = document.getElementById(id2);
   const total_price = price * total_input;
   get_phn_price.innerText = total_price; 
   return total_price;
}

function total() {
   const phn_price = document.getElementById('phn-price');
   const phn_str = phn_price.innerText;
   const phn = parseInt(phn_str);

   const case_price = document.getElementById('case-price');
   const case_str = case_price.innerText;
   const _case = parseInt(case_str);

   const total = phn + _case;
   document.getElementById('subtotal').innerText = total;

   const tax = document.getElementById('tax');
   const tax_price = total * 0.1;
   tax.innerText = tax_price.toFixed(2);

   const withtax = document.getElementById('total');
   const withtax_total = total + tax_price;
   withtax.innerText = withtax_total;
}


document.getElementById('phn-btn-plus').addEventListener('click', function () {
   input('phn-field', 'plus', 'phn-price', 1259);
   total()
})

document.getElementById('phn-btn-minus').addEventListener('click', function () {
   input('phn-field', 'minus', 'phn-price', 1259);
   total()   
})

document.getElementById('case-btn-plus').addEventListener('click', function() {
   input('case-field', 'plus', 'case-price', 59);
   total()
})

document.getElementById('case-btn-minus').addEventListener('click', function() {
   input('case-field', 'minus', 'case-price', 59);
   total()
})
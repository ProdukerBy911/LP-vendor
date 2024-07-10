 // JavaScript for form submission
 const form = document.getElementById('checkout-form');

 form.addEventListener('submit', (event) => {
   event.preventDefault();

   // Aqui você pode adicionar a lógica para processar o pagamento
   console.log('Formulário enviado!');
 });
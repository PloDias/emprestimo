const loanAmount = document.getElementById("loan-amount");
const loanAmountValue = document.getElementById("loan-amount-value");

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL' 
});

loanAmount.oninput = function() {
  loanAmountValue.innerHTML = formatter.format(loanAmount.value);
}

const loanTAmount = document.getElementById("loan-term");
const loanTAmountValue = document.getElementById("loan-term-value");

loanTAmount.oninput = function() {
  loanTAmountValue.innerHTML = loanTAmount.value;
}

$(document).ready(function() {
  // Get loan amount, interest rate, and loan term values
  var loanAmount = $('#loan-amount').val();
  // Juros AQUI <--------------------------------------------------
  var interestRate = 4.75;
  // Juros AQUI <--------------------------------------------------
  var interestAnRate = 0.38;
  var loanTerm = $('#loan-term').val();

  // Calculate monthly payment, total payment, and total months
  var monthlyRate = interestRate / 1200;
  var totalMonths = loanTerm;
  var monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths));
  var totalPayment = monthlyPayment * totalMonths;

  // Display results
  $('#monthly-payment').text('' + monthlyPayment.toFixed(2));
  $('#total-payment').text('' + totalPayment.toFixed(2));
  $('#total-months').text(totalMonths);

  $('#loan-amount, #loan-term').on('input', function() {
// Pega valores
    loanAmount = $('#loan-amount').val();
// Juros + Taxa de adesão <--------------------------------------------------
    interestRate = 4.774; 
    loanTerm = $('#loan-term').val();
// Calcula os novos resultados
    monthlyRate = interestRate / 100;
    totalMonths = loanTerm;
    monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths));
totalPayment = monthlyPayment * totalMonths + 200; // Taxa de Adesão

// Atualiza os resultados
$('#monthly-payment').text(formatter.format(monthlyPayment.toFixed(2)));
$('#total-payment').text(formatter.format(totalPayment.toFixed(2)));
$('#total-months').text(totalMonths);
});
});

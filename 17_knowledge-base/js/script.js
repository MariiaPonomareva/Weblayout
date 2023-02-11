document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.form', {
    errorLabelStyle: {
      color: '#ff5c00',
    }
  });
  const element = document.querySelector('.select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom',
    allowHTML: true
  });

  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  validation
    .addField('.name', [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели имя',
      },
      {
      rule: 'minLength',
      value: 3,
      errorMessage: "Не достаточное количество символов"
    },
    {
      rule: 'maxLength',
      value: 10,
      errorMessage: "Вы ввели больше чем положено"
    }
    ])
    .addField('.mail', [{
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Вы не корректно ввели email',
    }
    ])
    .addField('.tel', [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели телефон',
      },
      {
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Не достаточное количество символов в строке',
    }
    ])

})


tippy('#myButton', {
  content: 'Глава 2, страница 176',
  maxWidth: 163,
});


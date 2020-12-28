// default parameter
// 기본값 매기변수
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
  {
      function printMessage(message) {
          if (message == null) {
              message = "default message";
          }
          console.log(message);
      }

      printMessage("hello");
      printMessage();
  }
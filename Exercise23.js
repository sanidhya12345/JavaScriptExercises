//Write a JavaScript program to run a function in a separate thread by using a Web Worker, allowing long running functions to not block the UI. 

//#Source https://bit.ly/2neWfJ2 
const runAsync = fn => {
    const worker = new Worker(
      URL.createObjectURL(new Blob([`postMessage((${fn})());`]), {
        type: 'application/javascript; charset=utf-8'
      })
    );
    return new Promise((res, rej) => {
      worker.onmessage = ({ data }) => {
        res(data), worker.terminate();
      };
      worker.onerror = err => {
        rej(err), worker.terminate();
      };
    });
  };
  const longRunningFunction = () => {
    let result = 0;
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 700; j++) {
        for (let k = 0; k < 300; k++) {
          result = result + i + j + k;
        }
      }
    }
    return result;
  };
  /*
  */
  runAsync(longRunningFunction).then(console.log); // 209685000000
  runAsync(() => 10 ** 3).then(console.log); // 1000
  let outsideVariable = 50;
  runAsync(() => typeof outsideVariable).then(console.log); // 'undefined'
  
function Buttons() {
  const Clicked = () => {
    console.log('Button Clicked');
  };

  const PrintDate = () => {
    console.log(new Date().toString());
  };

  const AlertDate = () => {
    alert(new Date().toString());
  };

  return (
    <div>
      <p>
        <button onClick={Clicked}>Click Me</button>
      </p>
      <p>
        <button onClick={PrintDate}>Print Date</button>
      </p>
      <p>
        <button onClick={AlertDate}>Alert Date</button>
      </p>
    </div>
  );
}

export default Buttons;


// function Buttons() {
//   const printDate = () => {
//     let date = new Date();
//     console.log(date);
//   };
//   const clicked = (e) => {
//     console.log(e);
//     console.log("Button Clicked");
//   };
//   const alertDate = () => {
//     let date = new Date();
//     console.log(date);
//     alert(date);
//   };

//   function mouseIn() {
//     console.log("Mouse here");
//   }

//   return (
//     <div>
//       <p>
//         <button onMouseEnter={mouseIn} onClick={clicked}>
//           Click Me
//         </button>
//       </p>
//       <p>
//         <button
//           onClick={() => {
//             printDate();
//           }}
//         >
//           Print Date
//         </button>
//       </p>
//       <p>
//         <button onClick={alertDate}>Alert Date</button>
//       </p>
//     </div>
//   );
// }

// export default Buttons;


1) If we delete node_modules. How to run our app again successfully

ans:  
![Screen Shot 11-02-2023 at 22 12 - 2](https://user-images.githubusercontent.com/59046483/218270130-98f45e3d-028e-4757-9a90-6dee7489b786.png)


2) By default react use which tool chain to build applications
![Screen Shot 11-02-2023 at 22 12](https://user-images.githubusercontent.com/59046483/218270043-a32554d5-52d6-44aa-bd2d-7f85922278cb.png)



In React from function we return UI/UX.
we use the function as a tag. Supoose we make a function with the name App then we use the function as <App />
keep in mind when we import any function make sure the first letter in uppercase.



Fragment :  a "fragment" is a way to group a set of children elements together without adding any extra DOM nodes to the DOM tree.
function MyComponent() {
  return (
    <div>
      <div>First div</div>
      <div>Second div</div>
    </div>
  );
}


when you want to use inline Css and inline js then use Cample Case convention. for example class====className 

for inline css sometime we have to pass js object in style parameter .
ex:<div style={{ backgroundColor:'grey'}}>React -js tutorial</div>
{}---> use to access the variable


Props:"props" (short for properties) are a way of passing data from a parent component to its child components. Props are used to make a component more dynamic and reusable.

ex: 
1)
function WelcomeMessage(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <WelcomeMessage name="John" />;
}
2) 

app.js
    Video title="React-js tutorial"></Video>


video.js
     // function Video(props) {
//     console.log(props)
//   return (
//     <>
//       <img src="https://picsum.photos/240/120" alt="Katherine Johnson" />
//       <div style={{ backgroundColor:'grey'}}>{props.title}</div>
//     </>
//   );
// }

we can do all of the thing with the help of props that is feasible done with css attributes.



Conditional rendering:
--------------------------

function Video({ title, channel, views, time,children }) {
  let verified=true;
  let channelJsx=<div className="channel">{channel} ✅</div>;
  // in react jsx can be store in a js varable and we can access it inside the function with {}.
  return (
    <>
      <div className="container">
        <div>
        <img />
        </div>
        <div className="title">{title}</div>
        {/* <div className="channel">{channel} ✅</div> */}
        {channelJsx}
        <div className="children">{children}</div>
        <div className="views">
          {views}
          views <span>.</span> {time}
        </div>
      </div>
    </>

short circuit and ternery opertaor:
-----------------------------------
 return (
    <>
      <div className="container">
        <div>
        <img src={``} alt="Katherine Johnson" />
        </div>
        <div className="title">{title}</div>
        {/* <div className="channel">{channel} ✅</div> */}
        {/* {channelJsx} */}

        {/* {verified ?<div className="channel">{channel} ✅</div> :<div className="channel">{channel} </div>} */}

        {/* <div className="channel">{channel} {verified ? '✅' :null}</div> */}
        {/* here we are appliying terney operator only on the green tick because in previous case code get copy more */}

        <div className="channel">{channel} {verified && '✅'}</div>
        {/* this concept is know as a short circuit */}

        <div className="children">{children}</div>
        <div className="views">
          {views}
          views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;


Hooks:
------

useState: const [stateVariable, setStateVariable] = useState(initialValue);

we are using const because:
--------------------------
Using const ensures that the variables cannot be reassigned, providing better protection against accidental modifications. This is especially important when dealing with state in React, as any unintended modifications to state can lead to unexpected behavior and bugs in your application.



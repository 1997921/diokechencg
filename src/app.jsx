
import React from "react";
import ReactDOM from "react-dom";
// import ReactSwiper from 'reactjs-swiper';
import "./index.scss"

 class APP extends React.Component{
     //构造函数
     constructor(props){
         super(props);
         this.state={
             data:"123",
             haschild:true
         }
         console.log("constructor")
     }
     //将要加载的时候执行
     componentWillMount(){
        console.log("componentWillMount")
     }
     //挂载完成
     componentDidMount(){
         console.log("componentDidMount")
     }
     //将要接受父组件传来的props
     componentWillReceiveProps(){
        console.log(" componentWillReceiveProps")
    }
    //是否更新子组件
    shouldComponentUpdate(){
        console.log("  shouldComponentUpdate,更改");
        return true;
    }
    //组件将要更新
    componentWillUpdate(){
       console.log("  componentWillUpdate")
    }
    //更新完成
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
     //将要接受父组件传来的props
     componentWillReceiveProps(){
         console.log(" componentWillReceiveProps")
     }
     //是否更新子组件
     shouldComponentUpdate(){
        return true
     }
     //组件将要更新
     componentWillUpdate(){
        console.log("  componentWillUpdate")
     }
     //更新完成
     componentDidUpdate(){
        console.log("  componentDidUpdate")
     }
     //组件将要销毁
     componentWillUnmount(){
        console.log("  componentWillUnmount")
     }
    handleClick(){
        this.setState({
            data:"456"
        })
    }
    handledel(){
        this.setState({
            haschild:false
        })
    }
    //渲染
     render(){
         console.log("render")
         return(
             <div>
                 {
                     this.state.haschild ?
                     <div>
                     <Component data={this.state.data}/>
                     <div>{this.state.data}</div>
                     </div>
                     :null
                 }
             
             <button onClick={() =>{this.handleClick()}}>改变内容</button>
             <button onClick={() =>{this.handledel()}}>删除内容</button>
             </div>
         )
     }
 }
class Component extends React.Component{
    constructor(props){
        super(props);
    }
    render(props){
        return(
            <h1></h1>
        )
    }
}

ReactDOM.render(
        /*组件的返回方法*/
         <div>
           <APP/>
        </div>,
        document.getElementById("app")
 );












































// class Child1 extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             bgColor:"#fff"
//        }
            
//     }
//     handleClick(){
//       this.props.callback("red")
//     };
//     render(){
//         return(
//         <div>
//             <h1>1的背景色: {this.state.bgColor}</h1>
//             <button onClick={(e) =>{this.handleClick(e)}}>改变父组件的背景颜色</button>
//         </div>
//         );
//     }
// }
// class Child2 extends React.Component{
//     constructor(props){
//         super(props)
       
//         this.state={
//             bgColor:"#399"
            
//        }
            
//     }  
//     render(props){
        
//         return(
//         <div style={{background:this.props.cool}}>
//             <h1>2的背景色: {this.props.cool}</h1>
//         </div>
//         );
//     }
// }
// class Father extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//              bg2Color:"#399"
//         }
//     }
//     onchange(color){
//         this.setState({
//             bg2Color:color
//         })
//     }
//     render(props){
//        return(
//         <div>
//         <Child1 callback={(color) => {this.onchange(color)}}/>
//         <Child2  cool={this.state.bg2Color}/>
//         </div>
//        )
//     }
// }
// ReactDOM.render(
//     /*组件的返回方法*/
//      <div>
//        <Father/>
//     </div>,
//     document.getElementById("app")
// );


























// let ReactSwiperExample = () => {
//     const items = [{
//       image: 'http://i0.cy.com/xtl/pic/2020/01/14/main.jpg',
//       title: '图片1',
//       link: 'http://jd.com'
//     }, {
//       image: 'http://i0.cy.com/xtl/pic/2020/02/02/main_a1.jpg',
//       title: '图片2',
//     }, {
//       image: 'http://i0.cy.com/xtl/pic/2020/01/14/main.jpg',
//       title: '图片3',
//       link: 'http://jd.com'
//     }, {
//       image: 'http://i0.cy.com/xtl/pic/2020/02/02/main_a1.jpg',
//       title: '图片4',
//     }];
  
//     const swiperOptions = {
//       preloadImages: true,
//       autoplay: 4000,
//       autoplayDisableOnInteraction: false
//     };
//     return (
//       <ReactSwiper swiperOptions={swiperOptions} showPagination items={items}
//                    className="swiper-example" />
//     );
//   };
  
//   ReactDOM.render(
//     <ReactSwiperExample />, document.getElementById('app')
//   );

// let jsx = <div className="jsx" >jsx......</div>
// ReactDOM.render(
//     jsx,
//     document.getElementById("app")
// );
const mainContanier = document.querySelector('#root')

const reactElement =  {
    type: 'a',
    props: {
        href: 'https://google.com', // this segment pass valueb like react does
        target: '_blank'
    },
    children: 'click me to visit google'
}



function customRender(reactElement , container){ // this function send the react information into the ROOT ID IN INDEX HTML
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);

    // container.appendChild(domElement);

    // More efficient way 
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}
customRender(reactElement, mainContanier)
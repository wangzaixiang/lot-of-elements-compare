import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

var count = 0;

class PerfComponent00 extends HTMLElement {

    // static style = css`
    //     div { display: inline }
    // `

    constructor() {
        super();
        count += 1;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // let shadow = this.attachShadow({mode: "open"});
        // shadow.adoptedStyleSheets = [ PerfComponent00.style.styleSheet ]
        // let div = document.createElement("div");
        let text = document.createTextNode(this.getAttribute("content"));
        // div.appendChild(text);
        this.appendChild(text);
    }
}
// register the custom element
customElements.define("perf-comp-00", PerfComponent00);

class PerfComponent01 extends HTMLElement {
    constructor() {
        super();
    }
    // static style = css`
    //      div { display: inline }
    //  `

    connectedCallback() {
        this.render();
    }

    render() {
        let shadow = this.attachShadow({mode: "open"});
        // shadow.adoptedStyleSheets = [ PerfComponent01.style.styleSheet ]

        let comp1 = document.createElement("perf-comp-00");
        comp1.setAttribute("content", this.getAttribute("content"));
        shadow.appendChild(comp1);

        for (let i = 0; i < 4; i++) {
            let comp = document.createElement("perf-comp-00");
            comp.setAttribute("content", '');
            shadow.appendChild(comp);
        }
    }
}
customElements.define("perf-comp-01", PerfComponent01);

class PerfComponent10 extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        let shadow = this.attachShadow({mode: "open"});
        let upper = this.getAttribute("content").toUpperCase();
        var div = document.createElement("div");
        shadow.appendChild(div);

        for (let i = 0; i < 100; i++) {
            let comp1 = document.createElement("perf-comp-01");
            comp1.setAttribute("content", this.getAttribute("content"));
            div.appendChild(comp1);
        }

        div = document.createElement("div");
        shadow.appendChild(div);
        for (let i = 0; i < 100; i++) {
            let comp2 = document.createElement("perf-comp-01");
            comp2.setAttribute("content", upper);
            div.appendChild(comp2);
        }
    }
}
customElements.define("perf-comp-10", PerfComponent10);

class PerfComponent11 extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        let shadow = this.attachShadow({mode: "open"});
        let comp = document.createElement("perf-comp-10");
        comp.setAttribute("content", this.getAttribute("content"));
        shadow.appendChild(comp);
    }
}
customElements.define("perf-comp-11", PerfComponent11);

class PerfComponent20 extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        let shadow = this.attachShadow({mode: "open"});
        let children = this.getAttribute("content").split("").map(c => {
            let comp = document.createElement("perf-comp-11");
            comp.setAttribute("content", c);
            return comp;
        });

        children.forEach(c => shadow.appendChild(c));
    }
}
customElements.define("perf-comp-20", PerfComponent20);

@customElement('perf-test-container')
class PerfTestContainer extends LitElement {

    handleClick() {
        console.info("counter = ", count);
    }

    render() {
        return html`
            <h1>Native Element: element DOM + text </h1>
            <div>
                <perf-comp-20 content="abcdefghijklmnopqrstuvwxyz"></perf-comp-20>
            </div>
            <button @click=${this.handleClick}>click</button>
        `;
    }
}
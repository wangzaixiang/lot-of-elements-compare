import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {c} from "vite/dist/node/moduleRunnerTransport.d-CXw_Ws6P";

var count = 0;

class PerfComponent00 extends HTMLElement {
    constructor() {
        super();
        count += 1;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        let shadow = this.attachShadow({mode: "open"});
        let text = document.createTextNode(this.getAttribute("content"));
        shadow.appendChild(text);
    }
}
// register the custom element
customElements.define("perf-comp-00", PerfComponent00);

class PerfComponent01 extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        let shadow = this.attachShadow({mode: "open"});
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

class PerfTestContainer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    handleClick() {
        console.info("counter = ", count);
    }

    render() {
        let shadow = this.attachShadow({mode: "open"});
        let comp = document.createElement("perf-comp-20");
        comp.setAttribute("content", "abcdefghijklmnopqrstuvwxyz");
        shadow.appendChild(comp);

        let button = document.createElement("button");
        button.textContent = "click";
        button.addEventListener("click", this.handleClick);
        shadow.appendChild(button);
    }
}
customElements.define("perf-test-container", PerfTestContainer);
---
title: "Book-N-Bike"
link: 'https://bnb.projet-ocr.ovh/'
bg: '#202020'
primary: '#fcf8e3'
imgAlt: "Page d'accueil d'une application (PWA) de réservation de vélo urbain"
tech: [js, jquery, maps, bootstrap, css3, html5]
shadow: 'rgba(255,255,255,0.3)'
excerpt: "Projet d'étude : créer une application de location de vélo urbain en JS(ES5)/Jquery, en programmation orienté objet. Utilisation des API JCDécaux et Google Maps (dépréciée depuis).J'ai fait de ce site une Progressive Web App."
path: /book-N-bike
date: "2019-08-01"
coverImage: ../images/projects/velo.png
miniPic: false
---

<!-- markdownlint-disable MD033 -->
<techno techs='js,jquery,maps,bootstrap,css3,html5'></techs>

## Projet d'étude

> Créer une application de location de vélo urbain en JS(ES5)/Jquery, en programmation orienté objet.

Utilisation des API JCDécaux et Google Maps (dépréciée depuis).J'ai fait de ce site une Progressive Web App en codant entièrement les services-worker.

## Technologies utilisées

```jsx
class FlavorForm extends React.Component { // highlight-line
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // highlight-next-line
    this.setState({value: event.target.value});
  }

  // highlight-start
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  // highlight-end

  render() {
    return (
      { /* highlight-range{1,4-9,12} */ }
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

```javascript{1,4-6}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```

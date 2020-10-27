import menu1 from '../assets/menu1.jpg'
import menu2 from '../assets/menu2.jpg'
import menu3 from '../assets/menu3.jpg'

const menu = [
  {
    name: 'Uncovering',
    price: '$195 per person - with wine pairing',
    description: 'First steps in a new world of flavors',
    image: {
      src: menu1,
      alt: 'Halibut'
    },
    details:
    [
      {
        name: 'Kampachi',
        description: 'Kampachi-Flying Fish Roe Sashimi; Ginger-Wasabi Emulsion',
        wine: 'Albariño, "Lagar de Pintos," Rías Baixas, Spain 2017'
      },
      {
        name: 'Red Snapper',
        description: 'Baked Snapper; Acorn Squash "Ceviche," Baja Style Shrimp Sauce',
        wine: 'Riesling, "Alma" Amphora, Salomon Undhof, Kremstal, Austria 2017'
      },
      {
        name: 'Apple',
        description: 'Brown Butter Mousse, Apple Confit, Armagnac Sabayon',
        wine: 'Château La Rame, Reserve du Château, Sainte-Croix-du-Monte, France 2014'
      }
    ],
    id: 1
  },
  {
    name: 'Rhodes Exploration',
    price: '$275 per person - with wine pairing',
    description: 'An exquisite and unforgettable 5-courses dinner',
    image: {
      src: menu2,
      alt: 'Langoustine'
    },
    details:
    [
      {
        name: 'Tuna',
        description: 'Layers of Thinly Pounded Yellowfin Tuna; Foie Gras, Toasted Baguette, Chives, Extra Virgin Olive Oil',
        wine: 'Albariño, "Lagar de Pintos," Rías Baixas, Spain 2017'
      },
      {
        name: 'Sepia',
        description: 'Sautéed Sepia "Ribbons"; Saffron Risotto, Lemon Confit Emulsion',
        wine: 'Riesling, "Alma" Amphora, Salomon Undhof, Kremstal, Austria 2017'
      },
      {
        name: 'Filet Mignon',
        description: 'Pan Roasted Filet Mignon; Mushroom-Roasted Vegetables, Natural Jus',
        wine: 'Furmint Blend, "Haloze," Weingut Gross, Štajerska, Slovenia 2017'
      },
      {
        name: 'Tropical Fruit',
        description: 'Exotic Fruit “Pavlova,” Coconut Sorbet, Lemongrass-Kefir Lime Sauce',
        wine: 'Château La Rame, Reserve du Château, Sainte-Croix-du-Monte, France 2014'
      },
      {
        name: 'Hazelnut',
        description: 'Hazelnut Sphere, Frangelico Mousse, Praline Ice Cream',
        wine: 'Trappist Ale, Trappistes Rochefort 6, Brasserie de Rochefort, Belgium'
      }
    ],
    id: 2
  },
  {
    name: 'Chef\'s Tasting',
    price: '$395 per person - with wine pairing',
    description: 'A full immersion in our chef\'s mind. Tailored from beginning to end.',
    image: {
      src: menu3,
      alt: 'Chocolate Dessert'
    },
    details:
    [
      {
        name: 'Tuna',
        description: 'Layers of Thinly Pounded Yellowfin Tuna; Foie Gras, Toasted Baguette, Chives, Extra Virgin Olive Oil',
        wine: 'Albariño, "Lagar de Pintos," Rías Baixas, Spain 2017'
      },
      {
        name: 'Sea Trout',
        description: 'Warm Sea Trout "Sashimi"; Osetra Caviar, Light Marinière Sauce',
        wine: 'Sake, Hakurakusei, Legend of the Stars, Tokubetsu Junmai, Japan'
      },
      {
        name: 'Hamachi',
        description: 'Seared Yellowtail Hamachi; Pickled Cucumber-Mango Salad, Lemon-Tandoori Olive Oil',
        wine: 'Riesling, "Alma" Amphora, Salomon Undhof, Kremstal, Austria 2017'
      },
      {
        name: 'Lobster',
        description: 'Grilled Lobster "Mi-Cuit"; Charred Scallions, Sea Urchin Sauce Américaine',
        wine: 'Furmint Blend, "Haloze," Weingut Gross, Štajerska, Slovenia 2017'
      },
      {
        name: 'Dover Sole',
        description: 'Sautéed Dover Sole; Almonds, Chanterelles, Soy-Lime Emulsion',
        wine: 'Krug, "Grand Cuvee," Reims NV'
      },
      {
        name: 'Halibut',
        description: 'Poached Halibut; Artichoke Medley, Black Truffle Barigoule',
        wine: 'Marsannay, Domaine Sylvain Pataille, Burgundy, France 2018'
      },
      {
        name: 'The Egg',
        description: 'Milk Chocolate Pot de Crème, Caramel Foam, Maple Syrup, Grain of Salt',
        wine: 'Trappist Ale, Trappistes Rochefort 6, Brasserie de Rochefort, Belgium'
      },
      {
        name: 'Tropical Fruit',
        description: 'Tropical Fruit "Pavlova," Coconut Sorbet, Lemongrass-Kefir Lime Sauce',
        wine: 'Château La Rame, Reserve du Château, Sainte-Croix-du-Monte, France 2014'
      }
    ],
    id: 3
  }
]

export default menu
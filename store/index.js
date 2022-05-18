// the goal is accessing this from any component

export const state = () => ({
    recipes: [
        {
            id: 1,
            title: "Pastas",
            author: "@jbl",
            date: "yy/mm/dd",
            category: "#pastas",
            image: "salmon.jpeg",
            ingredients: "pastas, pesto, salt, parmesan cheese, olive oil, pepper",
            steps: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisl quam, pretium sit amet magna vel, vehicula cursus dolor. Praesent vitae enim urna. Etiam gravida risus non odio placerat maximus. In hac habitasse platea dictumst. In lobortis velit ac arcu porta sagittis. Mauris ultricies mi at arcu mattis viverra. In cursus vitae odio vel pulvinar. \n Nunc tristique rhoncus eros id aliquet. Phasellus in aliquam elit, a tristique urna. Quisque ut nisl sed sapien facilisis euismod cursus in dui. Aenean ut tortor ornare, sagittis mi fringilla, varius lorem. Maecenas non congue mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat congue metus, convallis eleifend tellus volutpat non. Maecenas pulvinar rhoncus leo. Integer dapibus sapien a odio blandit viverra."
        },
        {
            id: 2,
            title: "Plum Pie",
            author: "@jbl",
            date: "yy/mm/dd",
            category: "#pies",
            image: "plumpie.jpeg",
            ingredients: "pie dough, plums, sugar",
            steps: "no steps for this one, too easy"
        }
    ]
})

export const mutations = {
    addItem(state, id){
        let item = state.recipes.find(recipe => recipe.id == id)
        state.myRentals.push(item)
    },
}

export const getters = {
    getProductById: (state) => (id) => {
        return state.recipes.       find(recipe => recipe.id == id)
    } 
}
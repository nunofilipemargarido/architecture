
const { createApp, ref } = Vue


let variable=[];

const recipeBook = {
    setup() {
        const teste = ref('Hello vue!')
        return {
          teste
        }
    }
};


createApp(recipeBook).mount('#app');
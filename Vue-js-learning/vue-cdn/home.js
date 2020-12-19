Vue.component('comment',{
/*     data:function() {
        return{

        }
    }, */
    props:[
        'title','content','circles'
    ],
    template:
    `
    <div class="comment">
        <section>
            <p style="display:inline-block">&#9899</p>
            <p style="display:inline-block" v-if="circles == 2 || circles == 3">&#9899</p>
            <p style="display:inline-block" v-if="circles == 3">&#9899</p>  
        </section>
        <h4>{{title}}</h4>
        <p>{{content}}</p>    
    </div>

    `
})
Vue.component('dish',{
        props:[
            'title','content','price'
        ],
        template:
        `
        <div>
            <h3>{{title}}</h3>
            <p>{{content}}</p> 
            <b>{{price}}</b> 
        </div>
    
        `
    })
new Vue({
    el:'#comments',

})
new Vue({
    el:'#dishes',

})
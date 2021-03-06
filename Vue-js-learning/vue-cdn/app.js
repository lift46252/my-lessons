// Определяем новый компонент, названный button-counter
/* Вместо этого свойство data у компонентов должно быть
функцией, чтобы каждый экземпляр компонента управлял 
собственной независимой копией возвращаемого объекта данных: */
// пишем глобальный компонент
Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    props:[],
    template: 
    // для того чтобы писать шаблон в несколько строчек нужно использовать обратные коввычки {`html...`}.
    // в шаблоне должен быть только один родительский элемент
    `
    <div>
    <p>hello</p>
    <button v-on:click="count++">Счётчик кликов — {{ count }}</button>
    </div>
    `
  })

Vue.component('todo-item',{
    // в Vue props передаются как массив
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
})
/* пишем глобальгый фильтр который работает со всеми обьектами*/
Vue.filter('lowerCase',function(value){
  return value.toLowerCase()
})
let app = new Vue({
    el:'#app',
    data:{
        message:'hello vue'
    }
});
let app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
    }
});
let app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});
let app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
        { text: 'Изучить JavaScript' },
        { text: 'Изучить Vue' },
        { text: 'Создать что-нибудь классное' }
        ]
    }
});
let app5 = new Vue({
    // элемент к которому мы обращаемся в данном случае el с id(#) app-5
    el: '#app-5',
    // пишем переменные и другие данные
    data:{
        message:'Привет, Vue.js!',
    },
    // пишем методы
    methods:{
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
});

let app6 = new Vue({
    el:'#app-6',
    data:{
        message: 'Привет, Vue!', 
    }
})

var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Овощи' },
        { id: 1, text: 'Сыр' },
        { id: 2, text: 'Что там ещё люди едят?' }
      ]
    }
  })
  let example = new Vue({
    el:"#example",
    data:{
        message:'Привет'
    },
    // пишем вычисляемое свойство
    computed:{
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }
  })
  new Vue({ el: '#components-demo' })
  // пример елемента vue вроде со всеми обьектами 
  new Vue ({
    el:'#list',
    data:{
      parentMessage: "parent",
      firstName:'Vue',
      lastName:'Js',
      items:[
        {message:"Potato"},{message:"Tomato"},{message:"Banana"}
      ],
    },
    // в методы можно передовать аргументы
    methods:{
      greet: function (e,name) {
        alert("hello," + name + "!")
        if (e) {
          alert(e.target.tagName)
        }
      },
      say: function (message) {
        alert(message)
      }
    },
    computed:{
      fullName: {
        // геттер:
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        // сеттер:
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
    },
    watch:{

    },
    // локальный компонент работает только в этом обьекте
    components:{
      'comp-button':{
        data: function () {
          return{
            text:'submit'
          }
        },
        template:
        `
        <button>{{text}}</button>
        `
      }
    },
    // в фильтры можно передовать аргументы
    // так пишем локальные фильтры которые работает только в этом обьекте
    filters:{
      toUpperCase (value){
        return value.toUpperCase()
      }
    }
  })
  new Vue({
    el: '#v-for-object',
    data: {
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  })
  new Vue({
    el:"#app-8",
    data:{
      message:""
    }
  })
  new Vue({
    el:"#app-9",
    data:{
      checkedNames:[]
    }
  })
  new Vue({
    el:"#app-10",
    data:{
      picked:""
    }
  })
  new Vue({
    el:"#app-11",
    data:{
      selected:""
    }
  })
  new Vue({
    el:"#app-12",
    data:{
      selected:[]
    }
  })
  new Vue({
    el: '#app-13',
    data: {
      selected: 'А',
      options: [
        { text: 'Один', value: 'А' },
        { text: 'Два', value: 'Б' },
        { text: 'Три', value: 'В' }
      ]
    }
  })
/* почему вычесляемые свойства обычно лучше методов
Кэширование вычисляемых свойств
Можно заметить, что такого же результата можно достичь и с помощью метода:

<p>Сообщение задом наперёд: «{{ reverseMessage() }}»</p>
// в компоненте
methods: {
  reverseMessage: function () {
    return this.message.split('').reverse().join('')
  }
}
Вместо вычисляемого свойства, можно использовать ту же самую функцию 
в качестве метода. С точки зрения конечного результата, оба подхода 
делают одно и то же. Но есть важное отличие: вычисляемые свойства
кэшируются, основываясь на своих реактивных зависимостях.
Вычисляемое свойство пересчитывается лишь тогда, когда изменится 
одна из его реактивных зависимостей. Поэтому, пока message 
остаётся неизменным, многократное обращение к reversedMessage 
будет каждый раз возвращать единожды вычисленное
значение, не запуская функцию вновь.

Использование метода, напротив, будет запускать 
функцию всегда, при каждом обращении к нему.

Зачем нужно кэширование? Представьте, есть «дорогое» вычисляемое свойство A,
требующее цикла по огромному массиву и выполняющее множество вычислений. 
И пусть ещё будут другие вычисляемые свойства, в свою очередь, зависящие 
от A. Без кэширования геттер A будет запускаться куда чаще необходимого! 
В тех же случаях, когда кэширования нужно избежать — используйте методы
*/
/* почему вычесляемые свойства обычно лучше слежения через watch 
Vue предоставляет и более общий способ наблюдения и 
реагирования на изменения данных в экземпляре: слежение 
за свойствами. Когда есть данные, которые необходимо 
обновлять при изменении других данных, возникает соблазн
избыточно использовать только этот подход, особенно 
если привыкли к Angular. Но, как правило, лучше использовать 
вычисляемые свойства, а не императивный коллбэк в watch. Рассмотрим пример:

<div id="demo">{{ fullName }}</div>
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
Код выше — императивный и избыточный. Сравните с версией с использованием вычисляемого свойства:

var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
Так гораздо лучше, не правда ли?
*/
/* v-if v-else v-else-if v-show
Директива v-if используется для рендеринга блока по условию. Блок будет отображаться только в том случае, если выражение директивы возвращает значение, приводимое к true.

<h1 v-if="awesome">Vue восхитителен!</h1>
Также можно добавить блок «иначе», используя директиву v-else:

<h1 v-if="awesome">Vue восхитителен!</h1>
<h1 v-else>О, нет 😢</h1>
Условные группы с использованием v-if и <template>
Поскольку v-if — директива, она должна быть указана в одном конкретном теге. Но что если мы хотим управлять отображением сразу нескольких элементов? В таком случае можно применить v-if к псевдоэлементу <template>, который служит невидимой обёрткой и сам в результатах отрисовки не появляется.

<template v-if="ok">
  <h1>Заголовок</h1>
  <p>Абзац 1</p>
  <p>Абзац 2</p>
</template>
v-else
Для указания блока «иначе» для v-if можно использовать директиву v-else:

<div v-if="Math.random() > 0.5">
  Сейчас меня видно
</div>
<div v-else>
  А теперь — нет
</div>
Элемент с директивой v-else должен следовать сразу за элементом с директивой v-if или v-else-if, иначе он не будет распознан.

v-else-if
Добавлено в версии 2.1.0+

Как следует из названия, v-else-if служит в качестве блока «else if» для директивы v-if. Можно объединять эти директивы в длинные цепочки:

<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Не A/B/C
</div>
Как и v-else, v-else-if должен следовать сразу за элементом с v-if или v-else-if.

Ещё одну возможность условного отображения предоставляет директива v-show. Используется она так же:

<h1 v-show="ok">Привет!</h1>
Разница в том, что элемент с v-show будет всегда оставаться в DOM, а изменяться будет лишь свойство display в его параметрах CSS.

v-show не работает на элементе <template> и не работает с v-else.

v-if производит «настоящую» условную отрисовку, удостоверяясь
что подписчики событий и дочерние компоненты внутри блока
должным образом уничтожаются и воссоздаются при изменении
истинности управляющего условия.

v-if ленивый: если условие ложно на момент первоначальной отрисовки,
он не произведёт никаких действий — условный блок не будет отображён,
пока условие не станет истинным.

v-show, напротив, куда проще: элемент всегда присутствует в DOM,
и только CSS-свойство переключается в зависимости от условия.

В целом, у v-if выше затраты на переключения, а у v-show больше 
затрат на первичную отрисовку. Так что если вы предполагаете, что 
переключения будут частыми, используйте v-show, если же редкими или маловероятными — v-if.

Совместное использование v-if и v-for не рекомендуется.
 Подробнее можно изучить в разделе рекомендаций.

При совместном использовании v-if и v-for, директива v-for 
имеет более высокий приоритет. Подробнее на странице отрисовки списков.
*/
/* key
Vue старается управлять элементами DOM настолько эффективно,
 насколько это возможно, зачастую переиспользуя их вместо того 
 чтобы создавать заново. Кроме улучшения производительности, у 
 этого подхода есть и другие преимущества. Например, если вы 
 позволяете пользователю переключаться между несколькими возможными типами логина:

<template v-if="loginType === 'username'">
  <label>Имя пользователя</label>
  <input placeholder="Введите имя пользователя">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Введите адрес email">
</template>
Изменение loginType в коде выше не сотрёт то, что пользователь ввёл в поле. 
Оба шаблона используют одни и те же элементы, поэтому <input> не заменяется — только его placeholder.

Попробуйте сами, введя что-нибудь в поле ввода и нажав на кнопку переключения:

Иногда такое поведение нежелательно, поэтому Vue можно явно указать: 
«эти элементы должны быть полностью независимы, не надо их переиспользовать». 
Для этого всего лишь нужно указать уникальное значение ключа key:

<template v-if="loginType === 'username'">
  <label>Имя пользователя</label>
  <input placeholder="Введите имя пользователя" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Введите адрес email" key="email-input">
</template>
Теперь эти поля ввода будут отрисовываться заново при каждом переключении:

Обратите внимание, элементы <label> всё ещё эффективно переиспользуются, поскольку для них key не указаны.
*/
/* v-for
Используйте директиву v-for для отрисовки списка элементов на 
основе массива данных. У директивы v-for особый синтаксис записи:
item in items, где items — исходный массив, а item — ссылка на текущий элемент массива:
<ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
*/

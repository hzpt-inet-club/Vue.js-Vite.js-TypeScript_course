declare module '*.css' {
    const classes : {
        [key:string]:string
    }
    export default classes
}

declare module '*.vue' {
    import {defineComponent,FunctionalComponent} from 'vue'
    const component:ReturnType<typeof defineComponent>
}
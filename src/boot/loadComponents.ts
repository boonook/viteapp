import {Toast,Button} from 'vant';

export default function loadComponents(app:any){
    app.use(Toast);
    app.use(Button);
    return app;
}
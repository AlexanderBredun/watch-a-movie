import { ref, type Ref } from 'vue';

export function useFetch<T>(req: ()=> Promise<T>, callback?: (arg: T)=> void): {data: Ref<T | null | undefined>, error: Ref<boolean>, loading: Ref<boolean>, refresh: ()=> void} {
    const data = ref<null | T>();
    const loading = ref<boolean>(false);
    const error = ref<boolean>(false);

   

    const caller = ()=> {
        loading.value = true;
        error.value = false;
        req()
        .then(res => {
           
            loading.value = false;
            data.value = res;
            if(callback){
                callback(res);
            }
        })
        .catch(err => {
            console.log(err);
            
            loading.value = false;
            error.value = true;
        });
    };
    caller();
   
    

    return {
        data,
        loading,
        error,
        refresh: caller
    };

}
import { ref } from 'vue';

export const useDebounce = (cb: (...args: any)=> void, delay = 300)=> {

	const timeout = ref<ReturnType<typeof setTimeout> | null>(null);
	
	
	return (...args: any)=> {
	
		if(timeout.value){
			clearTimeout(timeout.value);
		}
		timeout.value = setTimeout(()=> {
			cb(...args);
		}, delay);
	};

};
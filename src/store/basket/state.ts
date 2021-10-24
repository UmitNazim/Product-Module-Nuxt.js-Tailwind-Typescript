import { Basket } from '@/src/types/product';

export interface State {
  basket?: Basket[];
}

export default (): State => ({
  basket: [],
});

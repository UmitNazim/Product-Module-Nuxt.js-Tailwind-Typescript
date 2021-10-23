import { Basket } from '~/src/models/product';

export interface State {
  basket: Basket[];
}

export default (): State => ({
  basket: [],
});

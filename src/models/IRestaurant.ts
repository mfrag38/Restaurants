import IBranch from './IBranch';
import IItem from './IItem';
import ITag from './ITag';

/* Defining the structure of the restaurant object. */
interface IRestaurant {
	name: string;
	logo: string;
	description: string;
	branches: IBranch[];
	items: IItem[];
	tags: ITag[];
}

export default IRestaurant;

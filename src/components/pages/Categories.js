import '../../App.css';
import Cards from '../Cards';


export default function Categories() {

    // const [categories, setCategories] = useState(null);

    // useEffect(() => {
    //     axios.get(baseURL).then((response) => {
    //         setCategories(response.data);
    //     })
    // }, []);
    // if (categories) {
    //     return (
    //         <div>
    //             <h1 className="categories">Categories</h1>
    //             {categories.meals.map(cat => {
    //                 return <CardItem 
    //                     label={cat.strCategory}
    //                     title="This is what it is all about yeah!!"
    //                     path=""
    //                     src="https://picsum.photos/200/300"
    //                 />
    //             })}
    //         </div>
    //     );
    // }

    return (
        <>
            <Cards 
                letter='c'
            />
        </>
    );
}
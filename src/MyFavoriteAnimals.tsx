import { useGetAnimals } from "./hooks/apiHooks";

export default () => {
    const { isLoading, data } = useGetAnimals();

    return (
        <>
            <h1>My favorite animals are</h1>
            {isLoading ? <p>Loading</p> :
                data?.map((animal) => <div>id: {animal.id}, name: {animal.name} </div>)
            }
        </>
    );
}
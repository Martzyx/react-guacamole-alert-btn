import Button from "./components/button";

const App = () => {
    const handleClick = () => {
        console.log("Button clicked");
    };

    return (
        <div>
            <Button color="secondary" onClick={handleClick}>
                Click me
            </Button>
        </div>
    );
};

export default App;

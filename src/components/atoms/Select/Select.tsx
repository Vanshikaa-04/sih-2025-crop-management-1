export const Select = () => {
    return (
        <>
            <select className="select select-secondary">
                <option disabled selected>Pick a language</option>
                <option>Zig</option>
                <option>Go</option>
                <option>Rust</option>
            </select>
        </>
    );
};

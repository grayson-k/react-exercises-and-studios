export default function HobbyLinks() {
    let hobbyLinks = ["https://nomadlist.com/", "https://caltopo.com/"];

    return (
        <div>
            <a href={hobbyLinks[0]}>Nomad List</a>
            <a href={hobbyLinks[1]}>Caltopo</a>
        </div>
    );
}
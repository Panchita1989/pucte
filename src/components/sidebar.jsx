

const SideBar = ({visible}) => {
    return(
        <>
            {visible &&(
                <ul>
                    <li>Home</li>
                    <li>Rooms</li>
                    <li>Activities</li>
                    <li>Contact</li>
                </ul>
            )}
        </>
    )
}

export default SideBar
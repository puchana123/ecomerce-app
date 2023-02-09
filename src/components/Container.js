const Container = (props)=>{
    return(
        <section className={props.className}>
            <div className="container-fluid">
                {props.children}
            </div>
        </section>
    )
}

export default Container
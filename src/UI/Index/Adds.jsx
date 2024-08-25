import React from "react"

export default function Adds() {

    const adds = [
        "./Images/Companies/carousel_1.png",
        "./Images/Companies/carousel_2.png",
        "./Images/Companies/carousel_3.png"
    ]

    return (
        <>
            <div className="mt-5 add-slider">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" style={{ borderRadius: "30px", width: "60rem" }}>
                        {
                            adds.map((value, index) => {
                                return (
                                    <>
                                        <div class={index === 0 ? "carousel-item active" : "carousel-item"}>
                                            <a href=""><img class="d-block w-100" src={value} alt="First slide" height="150px" /></a>
                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <div className="simens-add">
                <a href=""><img src="./Images/Companies/simens.png" alt="" /></a>
            </div>

        </>
    )
}


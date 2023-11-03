import { useState } from 'react'

function BtnToTop(){

	const [visible,setVisible]=useState("")

	window.addEventListener("scroll", () => {
		window.scrollY>300?setVisible("active"):setVisible("")
	})

	const toTop=(ev)=>{
		ev.preventDefault()
		window.scrollTo({top:0,left: 0,behavior: 'smooth'})
	}

	return (
		<>
			<a href="#" id="btnUp" className={visible} onClick={toTop}>
				<i className="fa fa-angle-up"></i>
			</a>
		</>
	)
}

export default BtnToTop
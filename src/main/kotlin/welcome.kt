import kotlinx.css.img
import kotlinx.html.InputType
import kotlinx.html.js.onChangeFunction
import kotlinx.html.js.onClickFunction
import kotlinx.html.onClick
import org.w3c.dom.HTMLInputElement
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.br
import react.dom.div
import react.dom.img
import styled.css
import styled.styledDiv
import styled.styledInput
import kotlinx.browser.window

external interface WelcomeProps : RProps {
    var name: String
    var password:String
}

data class WelcomeState(val name: String, val password:String) : RState

@JsExport
class Welcome(props: WelcomeProps) : RComponent<WelcomeProps, WelcomeState>(props) {

    init {
        state = WelcomeState(props.name, props.password)

    }

    override fun RBuilder.render() {
        styledDiv {
            css {
                +WelcomeStyles.textContainer
            }
            +"Hello, ${state.name.reversed()}"
            +"\n Password value ${state.password}"
        }
        styledInput {
            css {
                +WelcomeStyles.textInput
            }
            attrs {
                type = InputType.text
                value = state.name
                onChangeFunction = { event ->
                    setState(
                            WelcomeState(name = (event.target as HTMLInputElement).value,"")
                    )
                }
            }
        }
        div{
            br(){}

        }
        styledInput {
            css {
                +WelcomeStyles.textInput
            }
            attrs {
                type = InputType.text
                value = state.password
                onChangeFunction = { event ->
                    setState(
                        WelcomeState("",password = (event.target as HTMLInputElement).value)
                    )
                }
            }
        }
        styledInput {
            css {
                +WelcomeStyles.textInput
            }
            attrs {
                type = InputType.button
                value = "Submit"
                onClickFunction = { event ->
                    //setState(
                      //  WelcomeState("",password = (event.target as HTMLInputElement).value)
                    //)
                    window.alert("Welcome")
                }
            }
        }
        div{
            br(){}

        }
        div{
            img(src="http://placekitten.com/g/200/300"){}
        }
    }
}

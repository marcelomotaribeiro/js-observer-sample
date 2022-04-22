import { loadTabPage } from '../../modules/load-tab-page'
import Observable from '../../modules/observable'

export const loadTabObservableSimple = (targetId) => loadTabPage(
    document.getElementById(targetId), 
    'src/pages/observable-simple/observable-simple.html',
    () => {
        const observableSimpleInputTextA = document.getElementById('observable-simple-inputText-a')
        const observableSimpleInputTextB = document.getElementById('observable-simple-inputText-b')
        const observableSimpleSentence = new Observable()
        observableSimpleSentence.subscribe((text) => {
            observableSimpleInputTextA.value = text
            observableSimpleInputTextB.value = text
        })
        observableSimpleInputTextA.addEventListener('keyup', e => observableSimpleSentence.notify(e.target.value))
        observableSimpleInputTextB.addEventListener('keyup', e => observableSimpleSentence.notify(e.target.value))
        observableSimpleInputTextA.focus()
    }
)
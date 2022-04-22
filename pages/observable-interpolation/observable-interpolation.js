import { loadTabPage } from '../../modules/load-tab-page'
import Observable from '../../modules/observable'

export const loadTabObservableInterpolation = (targetId) => loadTabPage(
    document.getElementById(targetId), 
    'pages/observable-interpolation/observable-interpolation.html',
    (selectedTab) => {
        const observableInterpolationInputTextId = 'observable-interpolation-inputText'
        selectedTab.innerHTML = selectedTab.innerHTML.replaceAll(
            `{{${observableInterpolationInputTextId}}}`, 
            '<span class="observableInterpolationInputTextId"></span>')
        const observableInterpolationInputText = document.getElementById(observableInterpolationInputTextId)
        const observableInterpolation = new Observable()
        observableInterpolation.subscribe((text) => {
            selectedTab.querySelectorAll('span.observableInterpolationInputTextId').forEach(element => element.innerHTML = text)            
        })
        observableInterpolationInputText.addEventListener('keyup', e => observableInterpolation.notify(e.target.value))
        observableInterpolationInputText.focus()
    }
)
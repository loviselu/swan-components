import page from '../../../src/page';
import buildComponent from '../../mock/swan-core/build-component';
import attach2Document from '../../utils/attach-to-document';
import componentBaseFieldCheck from '../../utils/component-base-field-check';
//import sinon from 'sinon';
const COMPONENT_NAME = 'page';

describe('component [' + COMPONENT_NAME + ']', () =>{
    const component = buildComponent(COMPONENT_NAME, page);
    const $component = attach2Document(component);
    componentBaseFieldCheck(COMPONENT_NAME, component);
    it('should be rendered after attach', () =>{
        console.log($component);
        expect($component).not.toBe(null);
    })
})
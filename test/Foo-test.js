import React from 'react';
import assert from 'power-assert';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Foo from '../src/Foo.jsx';

describe('<Foo />のテスト', () => {
  it('Fooをテスト', () => {
    sinon.spy(Foo.prototype, 'componentDidMount');
    const wrapper = shallow(<Foo />, { lifecycleExperimental: true });
    const label = wrapper.find('.foo');
    assert.equal(label.text(), 'Foo');
    assert(Foo.prototype.componentDidMount.calledOnce);
    assert(wrapper.state('isMounted'));
  });

});

import StaticNav from "../../src/client/app/components/staticNav";
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import { mount, shallow } from "enzyme";
import sinon from "sinon";

describe("StaticNav component", () => {

    let rendered;

    it("should render app bar", () => {
        rendered = mount(<StaticNav />);
        const node = rendered.find(AppBar).nodes[0];
        assert.strictEqual(node.length, 1);
    });

});
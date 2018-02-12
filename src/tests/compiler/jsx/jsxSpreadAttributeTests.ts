import {expect} from "chai";
import {ts, SyntaxKind} from "./../../../typescript";
import {JsxSpreadAttribute} from "./../../../compiler";
import {getInfoFromTextWithDescendant} from "./../testHelpers";

function getInfo(text: string) {
    return getInfoFromTextWithDescendant<JsxSpreadAttribute>(text, SyntaxKind.JsxSpreadAttribute, { isJsx: true });
}

describe(nameof(JsxSpreadAttribute), () => {
    describe(nameof<JsxSpreadAttribute>(n => n.getExpression), () => {
        function doTest(text: string, expected: string) {
            const {descendant} = getInfo(text);
            expect(descendant.getExpression().getText()).to.equal(expected);
        }

        it("should get the expression", () => {
            doTest(`var t = (<jsx {...test} />);`, "test");
        });
    });
});

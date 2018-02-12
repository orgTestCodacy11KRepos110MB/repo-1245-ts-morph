import {expect} from "chai";
import {ts, SyntaxKind} from "./../../../../typescript";
import {CallExpression, ImportExpressionedNode} from "./../../../../compiler";
import {getInfoFromTextWithDescendant} from "./../../testHelpers";

describe(nameof(ImportExpressionedNode), () => {
    describe(nameof<ImportExpressionedNode>(n => n.getExpression), () => {
        function doTest(text: string, expectedText: string) {
            const {descendant} = getInfoFromTextWithDescendant<CallExpression>(text, SyntaxKind.CallExpression);
            expect(descendant.getExpression().getText()).to.equal(expectedText);
        }

        it("should get the correct expression", () => {
            doTest("import(x)", "import");
        });
    });
});

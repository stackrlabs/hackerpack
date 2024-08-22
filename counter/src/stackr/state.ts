import { State } from "@stackr/sdk/machine";
import { solidityPackedKeccak256 } from "ethers";

export class CounterState extends State<number> {
  constructor(state: number) {
    super(state);
  }

  getRootHash() {
    return solidityPackedKeccak256(["uint256"], [this.state]);
  }
}

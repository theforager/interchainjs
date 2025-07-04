import { buildUseVueMutation } from "../../../vue-query";
import { MsgUpdateParams } from "./tx";
import { updateParams } from "./tx.rpc.func";
/**
 * @name useUpdateParams
 * @package injective.txfees.v1beta1
 * @see proto service: injective.txfees.v1beta1.UpdateParams
 */
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
import { buildUseMutation } from "../../../react-query";
import { MsgBid, MsgUpdateParams } from "./tx";
import { bid, updateParams } from "./tx.rpc.func";
/**
 * Bid defines a method for placing a bid for an auction
 * @name useBid
 * @package injective.auction.v1beta1
 * @see proto service: injective.auction.v1beta1.Bid
 */
export const useBid = buildUseMutation<MsgBid, Error>({
  builderMutationFn: bid
});
/**
 * @name useUpdateParams
 * @package injective.auction.v1beta1
 * @see proto service: injective.auction.v1beta1.UpdateParams
 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
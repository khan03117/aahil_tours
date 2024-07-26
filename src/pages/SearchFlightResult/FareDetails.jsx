import PropTypes from 'prop-types';
import FareRule from './FareRule';

const countPrice = (id, pricelist, paxinfo) => {
    let price = 0;
    const arr = pricelist.find(obj => obj.id === id);
    if (arr) {
        const adult_price = arr?.fd?.ADULT?.fC?.TF ?? 0;
        const child_price = arr?.fd?.CHILD?.fC?.TF ?? 0;
        const infant_price = arr?.fd?.INFANT?.fC?.TF ?? 0;
        const adultcount = paxinfo?.ADULT ?? 0;
        const childcount = paxinfo?.CHILD ?? 0;
        const infantcount = paxinfo?.INFANT ?? 0;
        price = adult_price * adultcount + child_price * childcount + infant_price * infantcount;
    }
    return price;
};
const FareDetails = ({ id, pricelist, paxinfo, rule }) => {

    const totalPrice = countPrice(id, pricelist, paxinfo);



    return (
        <>
            <div className="grid grid-cols-12 gap-2">
                <div className={` ${rule ? 'col-span-4' : 'col-span-12'} `}>
                    <div className="w-full">
                        <table className="w-full border border-gray-400 text-sm mt-5">
                            <tbody>
                                {Object.keys(paxinfo || {}).map((paxType) => {
                                    const paxCount = paxinfo[paxType];
                                    if (paxCount > 0) {
                                        const pricePerPax = pricelist.find(obj => obj.id === id)?.fd?.[paxType]?.fC?.TF ?? 0;
                                        return (
                                            <tr key={paxType} className="border border-gray-400">
                                                <td className="py-1">{paxCount} x {paxType.charAt(0) + paxType.slice(1).toLowerCase()}</td>
                                                <td className="text-end py-1">₹ {pricePerPax * paxCount}</td>
                                            </tr>
                                        );
                                    }
                                    return null;
                                })}
                                <tr className="border border-gray-400">
                                    <td className="py-1">Total (Base Fare)</td>
                                    <td className="text-end py-1"> ₹ {totalPrice}</td>
                                </tr>
                                {/* Additional rows for taxes and fees can be added here */}
                            </tbody>
                        </table>
                    </div>
                </div>
                {
                    rule && (
                        <>
                            <div className="col-span-8">
                                <FareRule rule={rule} />
                            </div>
                        </>
                    )
                }

            </div>
        </>
    );
};

FareDetails.propTypes = {
    id: PropTypes.string.isRequired,
    pricelist: PropTypes.array.isRequired,
    paxinfo: PropTypes.object.isRequired,
    rule: PropTypes.object.isRequired
};

export default FareDetails;

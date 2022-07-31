import { formatCurrency } from '../utilities/formatCurrency';

type PriceProps = {
  price: number;
  discount?: number;
};

function Price({ price, discount = 0 }: PriceProps) {
  const priceFormatted = formatCurrency(price);

  const priceWithoutCents = priceFormatted.slice(0, -3);
  const cents = priceFormatted.slice(-2);

  const priceWithDiscount = discount ? price - (price * discount) / 100 : price;
  const priceWithDiscountFormatted = formatCurrency(priceWithDiscount);

  const priceWithDiscountWithoutCents = priceWithDiscountFormatted.slice(0, -3);
  const priceWithDiscountCents = priceWithDiscountFormatted.slice(-2);

  return (
    <>
      <span
        style={{ fontSize: '0.95rem' }}
        className={
          discount > 0
            ? 'text-muted me-2 text-decoration-line-through'
            : 'text-dark me-2'
        }
      >
        {priceWithoutCents}
        <sup style={{ marginLeft: '1.5px' }}>{cents}</sup>
      </span>
      {discount > 0 && (
        <span className="text-dark fw-bold" style={{ fontSize: '0.95rem' }}>
          {priceWithDiscountWithoutCents}
          <sup style={{ marginLeft: '1.5px' }}>{priceWithDiscountCents}</sup>
        </span>
      )}
    </>
  );
}

export default Price;

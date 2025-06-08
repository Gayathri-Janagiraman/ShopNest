import { Link } from 'react-router-dom';
function Cancel() {
  return (
    <div className="text-center py-20">
      <h1 className="text-3xl text-red-600 font-bold">❌ Payment Cancelled</h1>
      <p className="mt-4">You cancelled the payment or something went wrong.</p>
      <Link to="/productcategory/camera">
        <button className="text-xs md:text-xl lg:text-2xl bg-blue-500 hover:bg-blue-700 rounded-lg p-2 mt-2 lg:mt-4">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}
export default Cancel;

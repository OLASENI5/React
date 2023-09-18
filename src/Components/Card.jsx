import PropTypes from 'prop-types';

// Card component definition with destructured props
const Card = ({ names, position, company, description, image, age, disable }) => {
  return (
    <div className="rounded-lg bg-[#1B4965] text-white flex flex-col p-5 gap-10 w-[18rem] h-[23rem] justify-center m-5 text-start">
      {/* Display the description */}
      <p className="text-2xl font-serif">{description}</p>
      <div className="flex gap-5">
        {/* Display the profile image */}
        <img className="rounded-full object-fill w-14 h-14 mt-20" src={image} alt="icon" />
        <div>
          {/* Display the person's name */}
          <p className="font-bold capitalize md:uppercase mt-20">{names}</p>
          {/* Display the person's age */}
          <p className="">{age}</p>
          {/* Display the person's position and company */}
          <p className="text-xxs font-sans hover:font-serif">
            {position} @ {company}
          </p>
          {/* Display the disable status */}
          <p className="">{disable}</p>
        </div>
      </div>
    </div>
  );
};

// PropTypes to specify the expected data types for each prop
Card.propTypes = {
  names: PropTypes.string,
  position: PropTypes.string,
  company: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  age: PropTypes.number,
  disable: PropTypes.bool,
};

export default Card;

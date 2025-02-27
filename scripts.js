// Formula library data
const formulas = [
    // Geometry
    {
        id: "circle-area",
        name: "Circle Area",
        category: "geometry",
        subcategory: "area",
        formula: "A = πr²",
        description: "The area of a circle is equal to pi multiplied by the square of its radius.",
        variables: [
            { name: "r", label: "Radius", unit: "units" }
        ],
        calculate: (values) => Math.PI * Math.pow(values.r, 2),
        formatResult: (result) => `${result.toFixed(2)} square units`,
        unitType: "area"
    },
    {
        id: "circle-circumference",
        name: "Circle Circumference",
        category: "geometry",
        subcategory: "perimeter",
        formula: "C = 2πr",
        description: "The circumference of a circle is equal to 2 times pi times the radius.",
        variables: [
            { name: "r", label: "Radius", unit: "units" }
        ],
        calculate: (values) => 2 * Math.PI * values.r,
        formatResult: (result) => `${result.toFixed(2)} units`,
        unitType: "length"
    },
    {
        id: "rectangle-area",
        name: "Rectangle Area",
        category: "geometry",
        subcategory: "area",
        formula: "A = l × w",
        description: "The area of a rectangle is equal to its length multiplied by its width.",
        variables: [
            { name: "l", label: "Length", unit: "units" },
            { name: "w", label: "Width", unit: "units" }
        ],
        calculate: (values) => values.l * values.w,
        formatResult: (result) => `${result.toFixed(2)} square units`,
        unitType: "area"
    },
    {
        id: "rectangle-perimeter",
        name: "Rectangle Perimeter",
        category: "geometry",
        subcategory: "perimeter",
        formula: "P = 2(l + w)",
        description: "The perimeter of a rectangle is equal to twice the sum of its length and width.",
        variables: [
            { name: "l", label: "Length", unit: "units" },
            { name: "w", label: "Width", unit: "units" }
        ],
        calculate: (values) => 2 * (values.l + values.w),
        formatResult: (result) => `${result.toFixed(2)} units`,
        unitType: "length"
    },
    {
        id: "triangle-area",
        name: "Triangle Area",
        category: "geometry",
        subcategory: "area",
        formula: "A = (b × h) / 2",
        description: "The area of a triangle is equal to half the product of its base and height.",
        variables: [
            { name: "b", label: "Base", unit: "units" },
            { name: "h", label: "Height", unit: "units" }
        ],
        calculate: (values) => (values.b * values.h) / 2,
        formatResult: (result) => `${result.toFixed(2)} square units`,
        unitType: "area"
    },
    {
        id: "triangle-perimeter",
        name: "Triangle Perimeter",
        category: "geometry",
        subcategory: "perimeter",
        formula: "P = a + b + c",
        description: "The perimeter of a triangle is equal to the sum of the lengths of its three sides.",
        variables: [
            { name: "a", label: "Side a", unit: "units" },
            { name: "b", label: "Side b", unit: "units" },
            { name: "c", label: "Side c", unit: "units" }
        ],
        calculate: (values) => values.a + values.b + values.c,
        formatResult: (result) => `${result.toFixed(2)} units`,
        unitType: "length"
    },
    {
        id: "sphere-volume",
        name: "Sphere Volume",
        category: "geometry",
        subcategory: "volume",
        formula: "V = (4/3)πr³",
        description: "The volume of a sphere is equal to 4/3 times pi times the cube of its radius.",
        variables: [
            { name: "r", label: "Radius", unit: "units" }
        ],
        calculate: (values) => (4/3) * Math.PI * Math.pow(values.r, 3),
        formatResult: (result) => `${result.toFixed(2)} cubic units`,
        unitType: "volume"
    },
    {
        id: "sphere-surface-area",
        name: "Sphere Surface Area",
        category: "geometry",
        subcategory: "surface area",
        formula: "A = 4πr²",
        description: "The surface area of a sphere is equal to 4 times pi times the square of its radius.",
        variables: [
            { name: "r", label: "Radius", unit: "units" }
        ],
        calculate: (values) => 4 * Math.PI * Math.pow(values.r, 2),
        formatResult: (result) => `${result.toFixed(2)} square units`,
        unitType: "area"
    },
    {
        id: "cylinder-volume",
        name: "Cylinder Volume",
        category: "geometry",
        subcategory: "volume",
        formula: "V = πr²h",
        description: "The volume of a cylinder is equal to pi times the square of its radius times its height.",
        variables: [
            { name: "r", label: "Radius", unit: "units" },
            { name: "h", label: "Height", unit: "units" }
        ],
        calculate: (values) => Math.PI * Math.pow(values.r, 2) * values.h,
        formatResult: (result) => `${result.toFixed(2)} cubic units`,
        unitType: "volume"
    },
    {
        id: "cylinder-surface-area",
        name: "Cylinder Surface Area",
        category: "geometry",
        subcategory: "surface area",
        formula: "A = 2πr² + 2πrh",
        description: "The surface area of a cylinder is equal to twice the area of the circular base plus the area of the rectangular part.",
        variables: [
            { name: "r", label: "Radius", unit: "units" },
            { name: "h", label: "Height", unit: "units" }
        ],
        calculate: (values) => 2 * Math.PI * Math.pow(values.r, 2) + 2 * Math.PI * values.r * values.h,
        formatResult: (result) => `${result.toFixed(2)} square units`,
        unitType: "area"
    },
    {
    id: "pyramid-volume",
    name: "Pyramid Volume",
    category: "geometry",
    subcategory: "volume",
    formula: "V = (1/3) * B * h",
    description: "The volume of a pyramid is equal to one-third of the product of the base area and the height.",
    variables: [
        { name: "B", label: "Base Area", unit: "square units" },
        { name: "h", label: "Height", unit: "units" }
      ],
      calculate: (values) => (1/3) * values.B * values.h,
      formatResult: (result) => `${result.toFixed(2)} cubic units`,
      unitType: "volume"
    },

    
    // Algebra
    {
        id: "quadratic-formula",
        name: "Quadratic Formula",
        category: "algebra",
        subcategory: "quadratic",
        formula: "x = (-b ± √(b² - 4ac)) / 2a",
        description: "The quadratic formula calculates the roots of a quadratic equation: ax² + bx + c = 0",
        variables: [
            { name: "a", label: "a", unit: "" },
            { name: "b", label: "b", unit: "" },
            { name: "c", label: "c", unit: "" }
        ],
        calculate: (values) => {
            const discriminant = Math.pow(values.b, 2) - 4 * values.a * values.c;
            if (discriminant < 0) return "No real solutions";
            
            const x1 = (-values.b + Math.sqrt(discriminant)) / (2 * values.a);
            const x2 = (-values.b - Math.sqrt(discriminant)) / (2 * values.a);
            
            if (x1 === x2) return `x = ${x1.toFixed(2)}`;
            return `x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`;
        },
        formatResult: (result) => result,
        unitType: "generic"
    },
    {
        id: "slope-formula",
        name: "Slope Formula",
        category: "algebra",
        subcategory: "linear",
        formula: "m = (y₂ - y₁) / (x₂ - x₁)",
        description: "The slope formula calculates the slope of a line passing through two points.",
        variables: [
            { name: "x1", label: "x₁", unit: "" },
            { name: "y1", label: "y₁", unit: "" },
            { name: "x2", label: "x₂", unit: "" },
            { name: "y2", label: "y₂", unit: "" }
        ],
        calculate: (values) => {
            if (values.x2 - values.x1 === 0) return "Undefined (vertical line)";
            return (values.y2 - values.y1) / (values.x2 - values.x1);
        },
        formatResult: (result) => typeof result === "string" ? result : `m = ${result.toFixed(2)}`,
        unitType: "generic"
    },
    {
        id: "compound-interest",
        name: "Compound Interest",
        category: "algebra",
        subcategory: "exponential",
        formula: "A = P(1 + r/n)^(nt)",
        description: "The compound interest formula calculates the final amount with interest compounded n times per period.",
        variables: [
            { name: "P", label: "Principal", unit: "$" },
            { name: "r", label: "Annual interest rate", unit: "decimal" },
            { name: "n", label: "Compounds per year", unit: "" },
            { name: "t", label: "Time", unit: "years" }
        ],
        calculate: (values) => values.P * Math.pow(1 + values.r / values.n, values.n * values.t),
        formatResult: (result) => `A = $${result.toFixed(2)}`,
        unitType: "currency"
    },
    
    // Calculus
    {
        id: "derivative-power-rule",
        name: "Power Rule (Derivative)",
        category: "calculus",
        subcategory: "derivatives",
        formula: "f'(x) = n·xⁿ⁻¹",
        description: "The power rule for derivatives states that if f(x) = xⁿ, then f'(x) = n·xⁿ⁻¹",
        variables: [
            { name: "n", label: "n (power)", unit: "" },
            { name: "x", label: "x (value)", unit: "" }
        ],
        calculate: (values) => values.n * Math.pow(values.x, values.n - 1),
        formatResult: (result) => `f'(x) = ${result.toFixed(4)}`,
        unitType: "generic"
    },
    {
        id: "integral-power-rule",
        name: "Power Rule (Integral)",
        category: "calculus",
        subcategory: "integrals",
        formula: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C",
        description: "The power rule for integrals states that ∫xⁿ dx = xⁿ⁺¹/(n+1) + C, where C is a constant",
        variables: [
            { name: "n", label: "n (power)", unit: "" },
            { name: "x", label: "x (value)", unit: "" }
        ],
        calculate: (values) => {
            if (values.n === -1) return "ln|x| + C";
            return Math.pow(values.x, values.n + 1) / (values.n + 1);
        },
        formatResult: (result) => typeof result === "string" ? result : `∫xⁿ dx = ${result.toFixed(4)} + C`,
        unitType: "generic"
    },
    {
        id: "limit-definition",
        name: "Limit Definition of Derivative",
        category: "calculus",
        subcategory: "limits",
        formula: "f'(x) = lim(h→0) [f(x+h) - f(x)]/h",
        description: "The limit definition of the derivative calculates the instantaneous rate of change of a function.",
        variables: [
            { name: "x", label: "x value", unit: "" },
            { name: "h", label: "h (small value)", unit: "" },
            { name: "fx", label: "f(x) value", unit: "" },
            { name: "fxh", label: "f(x+h) value", unit: "" }
        ],
        calculate: (values) => (values.fxh - values.fx) / values.h,
        formatResult: (result) => `f'(x) ≈ ${result.toFixed(4)}`,
        unitType: "generic"
    },
    
    // Trigonometry
    {
        id: "pythagorean-theorem",
        name: "Pythagorean Theorem",
        category: "trigonometry",
        subcategory: "triangles",
        formula: "c² = a² + b²",
        description: "In a right triangle, the square of the length of the hypotenuse equals the sum of the squares of the lengths of the other two sides.",
        variables: [
            { name: "a", label: "Side a", unit: "units" },
            { name: "b", label: "Side b", unit: "units" }
        ],
        calculate: (values) => Math.sqrt(Math.pow(values.a, 2) + Math.pow(values.b, 2)),
        formatResult: (result) => `c = ${result.toFixed(2)} units`,
        unitType: "length"
    },
    {
        id: "law-of-sines",
        name: "Law of Sines",
        category: "trigonometry",
        subcategory: "triangles",
        formula: "a/sin(A) = b/sin(B) = c/sin(C)",
        description: "The Law of Sines states that the ratio of the length of a side to the sine of the angle opposite to it is constant for all sides and angles in a triangle.",
        variables: [
            { name: "a", label: "Side a", unit: "units" },
            { name: "A", label: "Angle A", unit: "degrees" },
            { name: "b", label: "Side b", unit: "units" }
        ],
        calculate: (values) => {
            const angleA = values.A * (Math.PI / 180); // Convert to radians
            return (Math.asin((values.b * Math.sin(angleA)) / values.a)) * (180 / Math.PI);
        },
        formatResult: (result) => `Angle B = ${result.toFixed(2)}°`,
        unitType: "angle"
    },
    {
        id: "law-of-cosines",
        name: "Law of Cosines",
        category: "trigonometry",
        subcategory: "triangles",
        formula: "c² = a² + b² - 2ab·cos(C)",
        description: "The Law of Cosines relates the square of one side of a triangle to the squares of the other two sides and the cosine of the included angle.",
        variables: [
            { name: "a", label: "Side a", unit: "units" },
            { name: "b", label: "Side b", unit: "units" },
            { name: "C", label: "Angle C", unit: "degrees" }
        ],
        calculate: (values) => {
            const angleC = values.C * (Math.PI / 180); // Convert to radians
            return Math.sqrt(Math.pow(values.a, 2) + Math.pow(values.b, 2) - 2 * values.a * values.b * Math.cos(angleC));
        },
        formatResult: (result) => `Side c = ${result.toFixed(2)} units`,
        unitType: "length"
    },
    {
        id: "sine-function",
        name: "Sine Function",
        category: "trigonometry",
        subcategory: "basic",
        formula: "sin(θ) = opposite / hypotenuse",
        description: "The sine of an angle in a right triangle is the ratio of the length of the opposite side to the length of the hypotenuse.",
        variables: [
            { name: "angle", label: "Angle θ", unit: "degrees" }
        ],
        calculate: (values) => Math.sin(values.angle * (Math.PI / 180)),
        formatResult: (result) => `sin(θ) = ${result.toFixed(4)}`,
        unitType: "generic"
    },
    {
        id: "cosine-function",
        name: "Cosine Function",
        category: "trigonometry",
        subcategory: "basic",
        formula: "cos(θ) = adjacent / hypotenuse",
        description: "The cosine of an angle in a right triangle is the ratio of the length of the adjacent side to the length of the hypotenuse.",
        variables: [
            { name: "angle", label: "Angle θ", unit: "degrees" }
        ],
        calculate: (values) => Math.cos(values.angle * (Math.PI / 180)),
        formatResult: (result) => `cos(θ) = ${result.toFixed(4)}`,
        unitType: "generic"
    },
    
    // Statistics
    {
        id: "mean",
        name: "Mean (Average)",
        category: "statistics",
        subcategory: "descriptive",
        formula: "μ = (x₁ + x₂ + ... + xₙ) / n",
        description: "The mean (average) is the sum of all values divided by the number of values.",
        variables: [
            { name: "values", label: "Values (comma separated)", unit: "" }
        ],
        calculate: (values) => {
            const nums = values.values.split(',').map(x => parseFloat(x.trim())).filter(x => !isNaN(x));
            if (nums.length === 0) return 0;
            return nums.reduce((sum, val) => sum + val, 0) / nums.length;
        },
        formatResult: (result) => `Mean = ${result.toFixed(2)}`,
        unitType: "generic"
    },
    {
        id: "standard-deviation",
        name: "Standard Deviation",
        category: "statistics",
        subcategory: "descriptive",
        formula: "σ = √[(Σ(x - μ)²) / n]",
        description: "Standard deviation measures the amount of variation or dispersion in a set of values.",
        variables: [
            { name: "values", label: "Values (comma separated)", unit: "" }
        ],
        calculate: (values) => {
            const nums = values.values.split(',').map(x => parseFloat(x.trim())).filter(x => !isNaN(x));
            if (nums.length === 0) return 0;
            const mean = nums.reduce((sum, val) => sum + val, 0) / nums.length;
            const variance = nums.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / nums.length;
            return Math.sqrt(variance);
        },
        formatResult: (result) => `Standard Deviation = ${result.toFixed(2)}`,
        unitType: "generic"
    },
    {
        id: "probability",
        name: "Probability",
        category: "statistics",
        subcategory: "probability",
        formula: "P(E) = n(E) / n(S)",
        description: "The probability of an event is the number of favorable outcomes divided by the total number of possible outcomes.",
        variables: [
            { name: "favorable", label: "Favorable outcomes", unit: "" },
            { name: "total", label: "Total possible outcomes", unit: "" }
        ],
        calculate: (values) => values.favorable / values.total,
        formatResult: (result) => `P(E) = ${result.toFixed(4)} or ${(result * 100).toFixed(2)}%`,
        unitType: "generic"
    },
    
    // Physics
    {
        id: "kinematic-equation-1",
        name: "Kinematics: Final Velocity",
        category: "physics",
        subcategory: "mechanics",
        formula: "v = u + at",
        description: "This kinematic equation relates the final velocity to the initial velocity, acceleration, and time.",
        variables: [
            { name: "u", label: "Initial velocity", unit: "m/s" },
            { name: "a", label: "Acceleration", unit: "m/s²" },
            { name: "t", label: "Time", unit: "s" }
        ],
        calculate: (values) => values.u + values.a * values.t,
        formatResult: (result) => `Final velocity = ${result.toFixed(2)} m/s`,
        unitType: "velocity"
    },
    {
        id: "kinematic-equation-2",
        name: "Kinematics: Distance",
        category: "physics",
        subcategory: "mechanics",
        formula: "s = ut + ½at²",
        description: "This kinematic equation calculates the distance traveled with constant acceleration.",
        variables: [
            { name: "u", label: "Initial velocity", unit: "m/s" },
            { name: "a", label: "Acceleration", unit: "m/s²" },
            { name: "t", label: "Time", unit: "s" }
        ],
        calculate: (values) => values.u * values.t + 0.5 * values.a * Math.pow(values.t, 2),
        formatResult: (result) => `Distance = ${result.toFixed(2)} m`,
        unitType: "length"
    },
    {
        id: "newtons-second-law",
        name: "Newton's Second Law",
        category: "physics",
        subcategory: "mechanics",
        formula: "F = ma",
        description: "Newton's Second Law states that the force acting on an object is equal to the mass of the object multiplied by its acceleration.",
        variables: [
            { name: "m", label: "Mass", unit: "kg" },
            { name: "a", label: "Acceleration", unit: "m/s²" }
        ],
        calculate: (values) => values.m * values.a,
        formatResult: (result) => `Force = ${result.toFixed(2)} N`,
        unitType: "force"
    },
    {
        id: "ohms-law",
        name: "Ohm's Law",
        category: "physics",
        subcategory: "electricity",
        formula: "V = IR",
        description: "Ohm's Law states that the voltage across a conductor is directly proportional to the current flowing through it, with the constant of proportionality being the resistance.",
        variables: [
            { name: "I", label: "Current", unit: "A" },
            { name: "R", label: "Resistance", unit: "Ω" }
        ],
        calculate: (values) => values.I * values.R,
        formatResult: (result) => `Voltage = ${result.toFixed(2)} V`,
        unitType: "electric_potential"
    }
];

// Add SI unit prefixes
const unitPrefixes = {
    'yotta': { symbol: 'Y', factor: 1e24 },
    'zetta': { symbol: 'Z', factor: 1e21 },
    'exa': { symbol: 'E', factor: 1e18 },
    'peta': { symbol: 'P', factor: 1e15 },
    'tera': { symbol: 'T', factor: 1e12 },
    'giga': { symbol: 'G', factor: 1e9 },
    'mega': { symbol: 'M', factor: 1e6 },
    'kilo': { symbol: 'k', factor: 1e3 },
    'hecto': { symbol: 'h', factor: 1e2 },
    'deka': { symbol: 'da', factor: 1e1 },
    'base': { symbol: '', factor: 1 },
    'deci': { symbol: 'd', factor: 1e-1 },
    'centi': { symbol: 'c', factor: 1e-2 },
    'milli': { symbol: 'm', factor: 1e-3 },
    'micro': { symbol: 'μ', factor: 1e-6 },
    'nano': { symbol: 'n', factor: 1e-9 },
    'pico': { symbol: 'p', factor: 1e-12 },
    'femto': { symbol: 'f', factor: 1e-15 },
    'atto': { symbol: 'a', factor: 1e-18 },
    'zepto': { symbol: 'z', factor: 1e-21 },
    'yocto': { symbol: 'y', factor: 1e-24 }
};

// Map of unit types to determine which prefixes to offer
const unitTypes = {
    'length': ['m', 'm'],
    'area': ['m', 'm²'],
    'volume': ['m', 'm³'],
    'mass': ['g', 'g'],
    'time': ['s', 's'],
    'force': ['newton', 'N'],
    'energy': ['joule', 'J'],
    'power': ['watt', 'W'],
    'electric_current': ['ampere', 'A'],
    'electric_potential': ['volt', 'V'],
    'electric_resistance': ['ohm', 'Ω'],
    'frequency': ['hertz', 'Hz'],
    'pressure': ['pascal', 'Pa'],
    'velocity': ['meter per second', 'm/s'],
    'acceleration': ['meter per second squared', 'm/s²'],
    'angle': ['degree', '°'],
    'temperature': ['kelvin', 'K'],
    'currency': ['dollar', '$'],
    'generic': ['unit', '']
};

// DOM elements
const formulasGrid = document.getElementById('formulasGrid');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-btn');
const subcategoriesContainer = document.getElementById('subcategories');
const formulaModal = document.getElementById('formulaModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close-btn');

// Current state
let currentCategory = 'all';
let currentSubcategory = 'all';
let currentSearch = '';

// Initialize the application
function init() {
    // Add unit type information to each formula that doesn't specify one
    formulas.forEach(formula => {
        if (!formula.unitType) {
            // Determine unit type from formula description or default to generic
            if (formula.category === 'geometry') {
                if (formula.subcategory === 'area') {
                    formula.unitType = 'area';
                } else if (formula.subcategory === 'volume') {
                    formula.unitType = 'volume';
                } else if (formula.subcategory === 'perimeter' || formula.subcategory === 'length') {
                    formula.unitType = 'length';
                } else {
                    formula.unitType = 'generic';
                }
            } else {
                formula.unitType = 'generic';
            }
        }
    });
    
    renderFormulasGrid();
    
    // Add event listeners
    searchInput.addEventListener('input', handleSearch);
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentCategory = button.dataset.category;
            currentSubcategory = 'all'; // Reset subcategory when changing category
            
            // Update active button state
            categoryButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            
            // Update subcategories
            renderSubcategories();
            
            // Re-render the formulas grid
            renderFormulasGrid();
        });
    });
    
    // Close modal when clicking on close button or outside the modal
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === formulaModal) {
            closeModal();
        }
    });
}

// Handle search input
function handleSearch(e) {
    currentSearch = e.target.value.toLowerCase();
    renderFormulasGrid();
}

// Render subcategories for the current category
function renderSubcategories() {
    // Clear container
    subcategoriesContainer.innerHTML = '';
    
    if (currentCategory === 'all') {
        subcategoriesContainer.style.display = 'none';
        return;
    }
    
    // Get unique subcategories for the current category
    const subcategories = [...new Set(
        formulas
            .filter(formula => formula.category === currentCategory)
            .map(formula => formula.subcategory)
    )];
    
    if (subcategories.length <= 1) {
        subcategoriesContainer.style.display = 'none';
        return;
    }
    
    // Show subcategories
    subcategoriesContainer.style.display = 'flex';
    
    // Add "All" button for subcategories
    const allBtn = document.createElement('button');
    allBtn.textContent = 'All';
    allBtn.className = 'subcategory-btn' + (currentSubcategory === 'all' ? ' active' : '');
    allBtn.addEventListener('click', () => {
        currentSubcategory = 'all';
        updateSubcategoryActiveState(allBtn);
        renderFormulasGrid();
    });
    subcategoriesContainer.appendChild(allBtn);
    
    // Add buttons for each subcategory
    subcategories.forEach(subcategory => {
        if (!subcategory) return; // Skip empty subcategories
        
        const btn = document.createElement('button');
        btn.textContent = subcategory.charAt(0).toUpperCase() + subcategory.slice(1); // Capitalize
        btn.className = 'subcategory-btn' + (currentSubcategory === subcategory ? ' active' : '');
        btn.addEventListener('click', () => {
            currentSubcategory = subcategory;
            updateSubcategoryActiveState(btn);
            renderFormulasGrid();
        });
        subcategoriesContainer.appendChild(btn);
    });
}

// Helper function to update active state of subcategory buttons
function updateSubcategoryActiveState(activeButton) {
    const subcategoryButtons = document.querySelectorAll('.subcategory-btn');
    subcategoryButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    activeButton.classList.add('active');
}

// Filter formulas based on current category, subcategory and search input
function getFilteredFormulas() {
    return formulas.filter(formula => {
        // Filter by category
        const categoryMatch = currentCategory === 'all' || formula.category === currentCategory;
        
        // Filter by subcategory if applicable
        const subcategoryMatch = currentSubcategory === 'all' || formula.subcategory === currentSubcategory;
        
        // Filter by search
        const searchMatch = currentSearch === '' || 
            formula.name.toLowerCase().includes(currentSearch) ||
            formula.description.toLowerCase().includes(currentSearch) ||
            (formula.formula && formula.formula.toLowerCase().includes(currentSearch));
        
        return categoryMatch && subcategoryMatch && searchMatch;
    });
}

// Render the grid of formula cards
function renderFormulasGrid() {
    const filteredFormulas = getFilteredFormulas();
    
    // Clear the grid
    formulasGrid.innerHTML = '';
    
    // Add formula cards to the grid
    if (filteredFormulas.length === 0) {
        formulasGrid.innerHTML = '<div class="no-results">No formulas found</div>';
    } else {
        filteredFormulas.forEach(formula => {
            const card = document.createElement('div');
            card.className = 'formula-card chalk-dust';
            card.dataset.id = formula.id;
            
            // Create the card content
            const cardContent = `
                <div class="formula-category">${formula.category}</div>
                <div class="formula-name">${formula.name}</div>
                <div class="formula-expression">${formula.formula}</div>
                <div class="formula-description">${formula.description}</div>
                <button class="calculate-btn">Calculate</button>
            `;
            
            card.innerHTML = cardContent;
            
            // Add event listener to the calculate button
            const calcBtn = card.querySelector('.calculate-btn');
            calcBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent the card click event
                showCalculator(formula.id);
            });
            
            formulasGrid.appendChild(card);
        });
    }
}

// Generate unit selector based on formula unit type
function generateUnitSelector(formula) {
    // Get the appropriate unit information based on the formula's unit type
    const unitInfo = unitTypes[formula.unitType] || unitTypes.generic;
    const unitName = unitInfo[0];
    const unitSymbol = unitInfo[1];
    
    // For some unit types, we don't need prefix selection
    if (['generic', 'angle', 'currency', 'time'].includes(formula.unitType)) {
        return '';
    }
    
    // Generate the HTML for the unit selector
    let html = `
        <div class="unit-selector">
            <label for="unit-prefix">Unit Prefix:</label>
            <select id="unit-prefix" class="unit-prefix-select">
    `;
    
    // Add options for different prefixes
    Object.keys(unitPrefixes).forEach(prefix => {
        // Skip some less common prefixes for better usability
        if (['yotta', 'zetta', 'exa', 'peta', 'atto', 'zepto', 'yocto'].includes(prefix)) {
            return;
        }
        
        const selected = prefix === 'base' ? 'selected' : '';
        const displayName = prefix === 'base' ? unitName : `${prefix}${unitName}`;
        const displaySymbol = prefix === 'base' ? unitSymbol : `${unitPrefixes[prefix].symbol}${unitSymbol}`;
        
        html += `<option value="${prefix}" ${selected} data-factor="${unitPrefixes[prefix].factor}">${displayName} (${displaySymbol})</option>`;
    });
    
    html += `
            </select>
        </div>
    `;
    
    return html;
}

// Show calculator modal for a specific formula
function showCalculator(formulaId) {
    // Find the formula
    const formula = formulas.find(f => f.id === formulaId);
    if (!formula) return;
    
    // Create HTML for the calculator
    const html = `
        <h2 class="formula-title">${formula.name}</h2>
        <div class="formula-display chalk-dust">${formula.formula}</div>
        <div class="description">${formula.description}</div>
        
        <div class="variables">
            <h3>Calculate</h3>
            
            ${generateUnitSelector(formula)}
            
            <div class="variable-inputs">
                ${formula.variables.map(variable => `
                    <div class="input-group">
                        <label for="${variable.name}">${variable.label}${variable.unit ? ` (${variable.unit})` : ''}</label>
                        <input type="number" id="${variable.name}" step="any" placeholder="Enter value">
                    </div>
                `).join('')}
            </div>
            <button id="calculate-btn" class="category-btn" style="margin-top: 15px;">Calculate</button>
            
            <div id="result-container" class="result" style="display: none;">
                <h3>Result</h3>
                <div id="result-value" class="result-value"></div>
            </div>
        </div>
    `;
    
    // Set the modal content and show it
    modalContent.innerHTML = html;
    formulaModal.style.display = 'block';
    
    // Add calculation functionality
    const calculateBtn = document.getElementById('calculate-btn');
    const resultContainer = document.getElementById('result-container');
    const resultValue = document.getElementById('result-value');
    const unitPrefixSelect = document.getElementById('unit-prefix');
    
    calculateBtn.addEventListener('click', () => {
        // Gather values from inputs
        const values = {};
        let allValuesProvided = true;
        
        formula.variables.forEach(variable => {
            const input = document.getElementById(variable.name);
            const value = parseFloat(input.value);
            
            if (isNaN(value)) {
                input.style.borderColor = 'red';
                allValuesProvided = false;
            } else {
                input.style.borderColor = '';
                values[variable.name] = value;
            }
        });
        
        // If we have all values, calculate the result
        if (allValuesProvided) {
            try {
                // Calculate the result
                const result = formula.calculate(values);
                
                // Get selected unit prefix if applicable
                let formattedResult;
                
                if (unitPrefixSelect) {
                    const selectedPrefix = unitPrefixSelect.value;
                    const prefixFactor = parseFloat(unitPrefixSelect.options[unitPrefixSelect.selectedIndex].dataset.factor);
                    const selectedOption = unitPrefixSelect.options[unitPrefixSelect.selectedIndex];
                    
                    // Get unit info
                    const unitInfo = unitTypes[formula.unitType] || unitTypes.generic;
                    const baseUnitName = unitInfo[0]; // e.g., "meter"
                    const baseUnitSymbol = unitInfo[1]; // e.g., "m"
                    
                    // Get prefix info
                    const prefix = unitPrefixes[selectedPrefix]; // e.g., {symbol: 'c', factor: 0.01}
                    const prefixSymbol = prefix.symbol; // e.g., "c"
                    
                    // Create proper unit names and symbols
                    let unitName, unitSymbol;
                    
                    if (selectedPrefix === 'base') {
                        unitName = baseUnitName; // e.g., "meter"
                        unitSymbol = baseUnitSymbol; // e.g., "m"
                    } else {
                        // Handle special case for "meter" -> "centimeter" instead of "centimeter"
                        if (baseUnitName === 'meter') {
                            unitName = `${selectedPrefix}${baseUnitName}`; // e.g., "centimeter"
                        } else {
                            unitName = `${selectedPrefix} ${baseUnitName}`; // e.g., "centi gram"
                        }
                        unitSymbol = `${prefixSymbol}${baseUnitSymbol}`; // e.g., "cm"
                    }
                    
                    // Handle area and volume specifically
                    let displayUnitName, displayUnitSymbol;
                    let adjustedResult;
                    
                    if (formula.unitType === 'area') {
                        // For area measurements
                        adjustedResult = result / (prefixFactor * prefixFactor);
                        displayUnitName = `${unitSymbol}²`; // e.g., "square centimeters"
                        displayUnitSymbol = `${unitSymbol}²`; // e.g., "cm²"
                    } else if (formula.unitType === 'volume') {
                        // For volume measurements
                        adjustedResult = result / (prefixFactor * prefixFactor * prefixFactor);
                        displayUnitName = `${unitSymbol}³`; // e.g., "cubic centimeters"
                        displayUnitSymbol = `${unitSymbol}³`; // e.g., "cm³"
                    } else {
                        // For linear measurements and others
                        adjustedResult = result / prefixFactor;
                        displayUnitName = `${unitSymbol}s`; // e.g., "centimeters"
                        displayUnitSymbol = unitSymbol; // e.g., "cm"
                    }
                    
                    // Format the result with the appropriate unit
                    if (formula.formatResult) {
                        // Use the formula's custom formatter but replace generic units with the selected unit
                        const baseFormattedResult = formula.formatResult(adjustedResult);
                        
                        // Replace generic units with the selected unit prefix
                        if (formula.unitType === 'area') {
                            formattedResult = baseFormattedResult.replace('square units', displayUnitName);
                        } else if (formula.unitType === 'volume') {
                            formattedResult = baseFormattedResult.replace('cubic units', displayUnitName);
                        } else if (formula.unitType === 'length') {
                            formattedResult = baseFormattedResult.replace('units', displayUnitName);
                        } else {
                            formattedResult = baseFormattedResult;
                        }
                    } else {
                        formattedResult = `${adjustedResult.toFixed(4)} ${displayUnitName} (${displayUnitSymbol})`;
                    }
                } else {
                    // No unit prefix selection, use default formatter
                    formattedResult = formula.formatResult ? formula.formatResult(result) : result;
                }
                
                resultValue.textContent = formattedResult;
                resultContainer.style.display = 'block';
            } catch (error) {
                resultValue.textContent = 'Error: ' + error.message;
                resultContainer.style.display = 'block';
            }
        }
    });
}

// Close the modal
function closeModal() {
    formulaModal.style.display = 'none';
}

// Add chalk dust animation
function addChalkDustEffect() {
    document.addEventListener('click', function(e) {
        // Only add dust effect for elements with the chalk-dust class
        if (e.target.closest('.chalk-dust')) {
            const dust = document.createElement('div');
            dust.classList.add('dust-particles');
            dust.style.left = `${e.clientX}px`;
            dust.style.top = `${e.clientY}px`;
            document.body.appendChild(dust);
            
            setTimeout(() => {
                dust.remove();
            }, 1000);
        }
    });
}

// Function to shuffle an array (for random arrangement if desired)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Optional: Create a more visually interesting grid with varied card heights
function applyRandomHeights() {
    const cards = document.querySelectorAll('.formula-card');
    const heights = ['auto', 'auto', 'auto']; // Keep most cards at auto height
    
    cards.forEach(card => {
        const randomIndex = Math.floor(Math.random() * heights.length);
        card.style.height = heights[randomIndex];
    });
}

// Make formulas more visually appealing with chalk-like style
function enhanceFormulaDisplay() {
    const formulaExpressions = document.querySelectorAll('.formula-expression');
    
    formulaExpressions.forEach(formula => {
        // Apply chalk-like text effect
        formula.style.textShadow = '0px 0px 1px rgba(255,255,255,0.6)';
        
        // Randomly rotate formula slightly for more handwritten appearance
        const rotation = Math.random() * 2 - 1; // Between -1 and 1 degrees
        formula.style.transform = `rotate(${rotation}deg)`;
    });
}

// Start the application
document.addEventListener('DOMContentLoaded', () => {
    init();
    renderSubcategories();
    addChalkDustEffect();
    
    // Apply visual enhancements after rendering
    setTimeout(() => {
        enhanceFormulaDisplay();
        // Uncomment the following line for varied card heights
        // applyRandomHeights();
    }, 100);
    
    // Add support for keyboard navigation (Escape to close modal)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

// Handle window resizing to adjust the grid layout
window.addEventListener('resize', () => {
    enhanceFormulaDisplay();
});

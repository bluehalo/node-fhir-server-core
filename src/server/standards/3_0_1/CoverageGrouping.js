const BackboneElement = require('./BackboneElement');

class CoverageGrouping extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CoverageGrouping';
		Object.assign(this, opt);
	}

	// This is a CoverageGrouping resource
	static get __resourceType() {
		return 'CoverageGrouping';
	}

	// Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify an employer group. May also be referred to as a Policy or Group ID.
	get group() {
		return this.__group;
	}

	set group(new_value) {
		this.__group = new_value;
	}

	// A short description for the group.
	get groupDisplay() {
		return this.__groupDisplay;
	}

	set groupDisplay(new_value) {
		this.__groupDisplay = new_value;
	}

	// Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify a subset of an employer group.
	get subGroup() {
		return this.__subGroup;
	}

	set subGroup(new_value) {
		this.__subGroup = new_value;
	}

	// A short description for the subgroup.
	get subGroupDisplay() {
		return this.__subGroupDisplay;
	}

	set subGroupDisplay(new_value) {
		this.__subGroupDisplay = new_value;
	}

	// Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify a collection of benefits provided to employees. May be referred to as a Section or Division ID.
	get plan() {
		return this.__plan;
	}

	set plan(new_value) {
		this.__plan = new_value;
	}

	// A short description for the plan.
	get planDisplay() {
		return this.__planDisplay;
	}

	set planDisplay(new_value) {
		this.__planDisplay = new_value;
	}

	// Identifies a sub-style or sub-collective of coverage issued by the underwriter, for example may be used to identify a subset of a collection of benefits provided to employees.
	get subPlan() {
		return this.__subPlan;
	}

	set subPlan(new_value) {
		this.__subPlan = new_value;
	}

	// A short description for the subplan.
	get subPlanDisplay() {
		return this.__subPlanDisplay;
	}

	set subPlanDisplay(new_value) {
		this.__subPlanDisplay = new_value;
	}

	// Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage such as a level of deductables or co-payment.
	get class() {
		return this.__class;
	}

	set class(new_value) {
		this.__class = new_value;
	}

	// A short description for the class.
	get classDisplay() {
		return this.__classDisplay;
	}

	set classDisplay(new_value) {
		this.__classDisplay = new_value;
	}

	// Identifies a sub-style or sub-collective of coverage issues by the underwriter, for example may be used to identify a subclass of coverage such as a sub-level of deductables or co-payment.
	get subClass() {
		return this.__subClass;
	}

	set subClass(new_value) {
		this.__subClass = new_value;
	}

	// A short description for the subclass.
	get subClassDisplay() {
		return this.__subClassDisplay;
	}

	set subClassDisplay(new_value) {
		this.__subClassDisplay = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			group: this.__group,
			groupDisplay: this.__groupDisplay,
			subGroup: this.__subGroup,
			subGroupDisplay: this.__subGroupDisplay,
			plan: this.__plan,
			planDisplay: this.__planDisplay,
			subPlan: this.__subPlan,
			subPlanDisplay: this.__subPlanDisplay,
			class: this.__class,
			classDisplay: this.__classDisplay,
			subClass: this.__subClass,
			subClassDisplay: this.__subClassDisplay,
		});
	}
}

module.exports = CoverageGrouping;
